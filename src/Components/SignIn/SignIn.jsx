import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SignIn = () => {
    const { signIn } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;
        setLoading(true);
        setError('');

        signIn(email, password)
            .then(result => {
                console.log(result.user);
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
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-full max-w-md">
                <h1 className="text-3xl text-center font-bold mb-8">Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" disabled={loading} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading && 'opacity-50 cursor-not-allowed'}`}>
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                        <Link to="/signUp" className="text-blue-500 hover:text-green-700">
                            Sign Up
                        </Link>
                    </div>
                    {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default SignIn;
