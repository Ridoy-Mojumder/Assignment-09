import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        photoURL: '',
        email: '',
        password: '',
        agreement: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData(prevData => ({
            ...prevData,
            [name]: newValue
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const { name, photoURL, email, password } = formData;
        console.log(name, photoURL, email, password);
    
        createUser(email, password, { displayName: name, photoURL: photoURL })
            .then(result => {
                console.log(result.user);
                updateProfile(result.user,{
                    displayName:name,
                    photoURL: photoURL
                })
                .then(()=>{
                    console.log("profile updated")
                })
                .catch(error =>{
                    console.log(error);
                })
                setFormData({
                    name: '',
                    photoURL: '',
                    email: '',
                    password: '',
                    agreement: false
                });
                navigate("/signIn");
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full max-w-md">
                <h1 className="text-3xl text-center font-bold mb-8">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block text-gray-700 text-sm font-bold mb-2">Photo URL</label>
                        <input type="text" id="photoURL" name="photoURL" value={formData.photoURL} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter photo URL" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" />
                    </div>
                    <div className="mb-4 flex items-center">
                        <input type="checkbox" id="agreement" name="agreement" checked={formData.agreement} onChange={handleChange} className="mr-2" />
                        <label htmlFor="agreement" className="text-sm text-gray-700 font-bold">I agree to the terms and conditions</label>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
                        <Link to="/signIn" className="text-blue-500 hover:text-green-700">
                            Sign In
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
