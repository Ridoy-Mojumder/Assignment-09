import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet';

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
        const { name, email, photoURL } = formData;

        // Update profile information
        updateProfile(user, {
            displayName: name,
            photoURL: photoURL
        }).then(() => {
            console.log("Profile updated: ", name, photoURL);

            // Check if email needs to be updated
            if (user.email !== email) {
                user.updateEmail(email)
                    .then(() => {
                        console.log("Email updated to: ", email);
                        alert("Profile and email successfully updated!");
                    })
                    .catch(error => {
                        console.error("Failed to update email: ", error);
                        alert("Error updating email. Please check if the new email is valid and try again.");
                    });
            } else {
                alert("Profile successfully updated!");
            }
        }).catch(error => {
            console.error("Failed to update profile: ", error);
            alert("Error updating profile. Please try again.");
        });
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Update Profile</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>


            <div className="w-full pb-10 my-10 max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
                <h1 className="text-3xl font-bold text-center mb-5 text-indigo-600">Update Your Profile</h1>
                {/* Input fields and the form started */}
                <form onSubmit={handleSubmit} action="" className="space-y-6">
                    <div className="space-y-2 text-sm">
                        <label htmlFor="username" className="block ">
                            Your name
                        </label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                    </div>
                    <div className="space-y-2 text-sm">
                        <label htmlFor="username" className="block ">
                            Your Email
                        </label>
                        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
                    </div>
                    <div className="space-y-2 text-sm">
                        <label htmlFor="PhotoURL" className="block ">
                            Photo URL
                        </label>
                        <input type="text" id="photoURL" name="photoURL" value={formData.photoURL} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />

                    </div>
                    {/* Sign in Button */}
                    <button type='submit' className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                        Update Profile
                        <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                            Let&apos;s go
                        </span>
                        <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                        <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                    </button>
                </form>


            </div>
        </>

    );
};

export default UpdateProfile;
