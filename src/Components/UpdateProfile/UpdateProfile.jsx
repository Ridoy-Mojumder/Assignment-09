import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        console.log(name,email,photoURL)
        updateProfile(user,{
            displayName:name,
            photoURL: photoURL,
            email:email,
        })
        .then(()=>{
            console.log("profile updated")
        })
        .catch(error =>{
            console.log(error);
        })
        
       
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 border border-gray-300 rounded-md">
            <h1 className="text-3xl mb-4">Update Profile</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your name" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
                </div>
                <div className="mb-4">
                    <label htmlFor="photoURL" className="block text-gray-700 font-bold mb-2">Photo URL</label>
                    <input type="text" id="photoURL" name="photoURL" value={formData.photoURL} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter photo URL" />
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;
