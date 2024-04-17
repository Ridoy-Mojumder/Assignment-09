
import { MdHotTub, MdPool, MdRoom, MdRoomService, MdFitnessCenter, MdWifi, MdLocalLaundryService, MdLocalDining, MdLocalBar } from 'react-icons/md';

const OurServices = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-blue-900 mb-16">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Luxury Room */}
                    <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <MdRoom className="text-6xl text-blue-500 mx-auto mb-6" />
                        <h2 className="font-bold text-2xl mb-3">Luxury Rooms</h2>
                        <p className="text-gray-600">Experience ultimate comfort and relaxation in our luxurious rooms designed to exceed your expectations.</p>
                    </div>
                    {/* Swimming Pool */}
                    <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <MdPool className="text-6xl text-green-500 mx-auto mb-6" />
                        <h2 className="font-bold text-2xl mb-3">Big Swimming Pool</h2>
                        <p className="text-gray-600">Indulge in our expansive swimming pool, perfect for both leisurely laps and refreshing dips.</p>
                    </div>
                    {/* Spa and Wellness */}
                    <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <MdHotTub className="text-6xl text-purple-500 mx-auto mb-6" />
                        <h2 className="font-bold text-2xl mb-3">Spa & Wellness</h2>
                        <p className="text-gray-600">Relax and rejuvenate in our exclusive spa and wellness center, offering a range of luxurious treatments.</p>
                    </div>
                    {/* Gym Section */}
                    <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <MdFitnessCenter className="text-6xl text-red-500 mx-auto mb-6" />
                        <h2 className="font-bold text-2xl mb-3">Gym Section</h2>
                        <p className="text-gray-600">Stay active and energized with access to our state-of-the-art fitness center equipped with the latest equipment.</p>
                    </div>
                    {/* Concierge Services */}
                    <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <MdRoomService className="text-6xl text-yellow-500 mx-auto mb-6" />
                        <h2 className="font-bold text-2xl mb-3">Concierge Services</h2>
                        <p className="text-gray-600">Experience personalized attention and seamless service with our dedicated concierge team available 24/7.</p>
                    </div>
                    {/* Additional Service 1: High-speed Wi-Fi */}
                    <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <MdWifi className="text-6xl text-blue-500 mx-auto mb-6" />
                        <h2 className="font-bold text-2xl mb-3">High-speed Wi-Fi</h2>
                        <p className="text-gray-600">Stay connected with our high-speed Wi-Fi service available throughout the property.</p>
                    </div>
                    {/* Additional Service 2: Laundry Service */}
                    <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <MdLocalLaundryService className="text-6xl text-gray-500 mx-auto mb-6" />
                        <h2 className="font-bold text-2xl mb-3">Laundry Service</h2>
                        <p className="text-gray-600">Enjoy the convenience of our professional laundry service, available on-site.</p>
                    </div>
                    {/* Additional Service 3: Dining Options */}
                    <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <MdLocalDining className="text-6xl text-red-500 mx-auto mb-6" />
                        <h2 className="font-bold text-2xl mb-3">Dining Options</h2>
                        <p className="text-gray-600">Savor exquisite culinary delights with our diverse dining options, ranging from fine dining to casual eateries.</p>
                    </div>
                    {/* Additional Service 4: Bar & Lounge */}
                    <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <MdLocalBar className="text-6xl text-yellow-600 mx-auto mb-6" />
                        <h2 className="font-bold text-2xl mb-3">Bar & Lounge</h2>
                        <p className="text-gray-600">Unwind and socialize at our stylish bar and lounge, offering a selection of signature cocktails and beverages.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
