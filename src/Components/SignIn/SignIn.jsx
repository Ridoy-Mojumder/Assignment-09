import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

const SignIn = () => {
    const { createUser, signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [register, setRegister] = useState(false);
    const [registerError, setRegisterError] = useState('');
    const [passwordShow, setPasswordShow] = useState(false);
    const [password, setPassword] = useState(false);



    const [formData, setFormData] = useState({
        name: '',
        photoURL: '',
        email: '',
        password: '',
        agreement: false
    });


    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error);
        })
    }

    const handleGithubSignIn = () =>{
        signInWithGithub()
        .then(result => {
            console.log (result.user)
        })
        .catch(error =>{
            console.log(error);
        })
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        const newPassword = e.target.value;
        setPassword(newPassword);
        setPasswordShow(newPassword !== '');
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSignUpSubmit = (e) => {
        e.preventDefault();

        const { name, photoURL, email, password } = formData;
        console.log(name, photoURL, email, password);
        if (password.length < 6) {
            setRegisterError('Password should be 6 characters or longer.');
            return;
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)) {
            setRegisterError('Password must be at least 8 and at most 15 characters, and contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.');
            return;
        }

        setRegisterError('');

        createUser(email, password, { displayName: name, photoURL: photoURL })
            .then(result => {
                console.log(result.user);
                setPasswordShow(false);
                setPassword(false)
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(() => {
                        console.log("profile updated")
                    })
                    .catch(error => {
                        console.log(error);
                    })
                setFormData({
                    name: '',
                    photoURL: '',
                    email: '',
                    password: '',
                    agreement: false
                });
                navigate("/");
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            });
    };

    // const handlePasswordChange = (e) => {
        
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;
        setLoading(true);
        setError('');

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                setPasswordShow(false);
                setPassword(false)
                alert("Sign In Successful");
                setFormData({
                    email: '',
                    password: ''
                });
                navigate("/");
            })
            .catch(error => {
                console.error(error);
                setError('Invalid email or password. Please try again.');
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="w-80 md:w-96 lg:w-[800px] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl">
            {/* register form  */}
            <form onSubmit={handleSignUpSubmit} className={`p-8 w-full ${register ? 'lg:translate-x-0' : 'lg:-translate-x-full hidden lg:block'} duration-500`}>
                <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Register</h1>
                {registerError && <h1 className="text-xl font-bold mb-4 text-red-500 text-center">{registerError}</h1>}
                <div className="space-y-5">
                    <label htmlFor="name" className="block">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                    <label htmlFor="name" className="block">PhotoURL</label>
                    <input type="text" id="photoURL" name="photoURL" value={formData.photoURL} onChange={handleChange} placeholder="Enter Your Photo URL" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                    <label htmlFor="u_email" className="block">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@example.com" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                    <div className="relative items-center">
                        <input id="_password" type={passwordShow ? 'password' : 'text'} name='password' value={formData.password} onChange={handleChange} placeholder=".............." min={5} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black text-black" />
                        {password && (
                            <span
                                onClick={() => setPasswordShow(!passwordShow)}
                                className=" absolute top-3 right-2 cursor-pointer text-[14px] text-black text-2xl "
                            >
                                {passwordShow ?  <FaEye />:<FaEyeSlash />}
                            </span>
                        )}
                    </div>
                    <div className="mb-4 flex items-center">
                        <input type="checkbox" id="agreement" name="agreement" checked={formData.agreement} onChange={handleChange} className="mr-2" />
                        <label htmlFor="agreement" className="text-sm text-gray-700 font-bold">I agree to the terms and conditions</label>
                    </div>
                </div>
                {/* button type will be submit for handling form submission*/}
                <button type="submit" className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block">Submit</button>
                <p className="mb-3 text-center">Already have an account?<Link onClick={() => { setRegister(!register); }} className="underline font-semibold">Login</Link></p>
                <hr />
                <button type="button" onClick={handleGoogleSignIn} className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current inline-block mr-2"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>Continue with Google</button>



            </form>
            {/* img */}
            <div className={`hidden lg:block absolute w-1/2 h-full top-0 z-50 duration-500 overflow-hidden bg-black/20 ${register ? 'translate-x-full rounded-bl-full duration-500' : 'rounded-br-full'}`}>
                <img src="https://source.unsplash.com/random" className="object-cover h-full" alt="card navigate ui" />
            </div>
            {/* login form */}
            <form onSubmit={handleSubmit} className={`p-8 w-full mr-0 ml-auto duration-500 ${register ? 'lg:translate-x-full hidden lg:block' : ''}`}>
                <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Login</h1>
                <div className="space-y-5">
                    <label htmlFor="_email" className="block">Email</label>
                    <input id="_email" type="email" placeholder="example@example.com" name="email" value={formData.email} onChange={handleChange} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                    <label htmlFor="_password" className="block">Password</label>
                    <div className="relative items-center">
                        <input id="_password" type={passwordShow ? 'password' : 'text'} name='password' value={formData.password} onChange={handleChange} placeholder=".............." min={5} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black text-black" />
                        {password && (
                            <span
                                onClick={() => setPasswordShow(!passwordShow)}
                                className=" absolute top-3 right-2 cursor-pointer text-[14px] text-black text-2xl "
                            >
                                {passwordShow ?  <FaEye />:<FaEyeSlash />}
                            </span>
                        )}
                    </div>
                </div>
                {/* button type will be submit for handling form submission*/}
                <button type="submit" disabled={loading} className={`py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block ${loading && 'opacity-50 cursor-not-allowed'}`} >{loading ? 'Signing In...' : 'Sign In'}</button>
                <p className="mb-3 text-center">Don&apos;t have an account?<Link onClick={() => { setRegister(!register); }} className="underline font-semibold" >Register</Link></p>
                <p>
                    {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                </p>
                <hr />
                <button type="button" onClick={handleGoogleSignIn} className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black"><svg viewBox="-0.5 0 48 48" version="1.1" className="w-6 inline-block mr-3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Google-color</title> <desc>Created with Sketch.</desc><defs></defs><g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Color-" transform="translate(-401.000000, -860.000000)"><g id="Google" transform="translate(401.000000, 860.000000)"><path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"></path><path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"></path><path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"></path><path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"></path></g></g></g></g></svg>Continue with Google</button>
                <button type='button' onClick={handleGithubSignIn} aria-label="Log in with GitHub" className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current inline-block mr-2"><path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path></svg>Continue with Github
                </button>
            </form>
        </div>




       
    );
};

export default SignIn;
