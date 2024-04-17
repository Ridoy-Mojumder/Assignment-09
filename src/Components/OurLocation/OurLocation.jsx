
import { MdEmail, MdPhone, MdRoom } from 'react-icons/md';
import { Link } from 'react-router-dom';


const OurLocation = () => {
    

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-blue-900 mb-16">Our Location</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    
                    <Link to="/location">
                        <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                            <MdRoom className="text-6xl text-blue-500 mx-auto mb-6" />
                            <h2 className="font-bold text-2xl mb-3">Location</h2>
                            <p className="text-gray-600">123 Main Street, City, Country</p>
                        </div>
                    </Link>
                    <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <MdPhone className="text-6xl text-blue-500 mx-auto mb-6" />
                        <h2 className="font-bold text-2xl mb-3">Phone</h2>
                        <p className="text-gray-600">+1 234 567 890</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <MdEmail className="text-6xl text-blue-500 mx-auto mb-6" />
                        <h2 className="font-bold text-2xl mb-3">Email</h2>
                        <p className="text-gray-600">info@example.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurLocation;
