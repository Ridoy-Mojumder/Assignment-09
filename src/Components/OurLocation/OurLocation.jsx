
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { MdEmail, MdPhone, MdRoom } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const OurLocation = () => {


    return (
        <>
            <h1 className="text-5xl font-bold text-center text-blue-900 mb-8">Our Location</h1>
            <Marquee>
            <p className='text-center'>If you click on Location Icon you can see our Live location</p>
            </Marquee>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <Link to="/location">
                        <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                            <MdRoom className="text-6xl text-blue-500 mx-auto mb-6" />
                            <h2 className="font-bold text-2xl mb-3">Location</h2>
                            <p className="text-gray-600">123 Main Street, City, Country</p>
                            <p><small>If you click in here you can see our location</small></p>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <MdPhone className="text-6xl text-blue-500 mx-auto mb-6" />
                        <h2 className="font-bold text-2xl mb-3">Phone</h2>
                        <p className="text-gray-600">+1 234 567 890</p>
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                        <MdEmail className="text-6xl text-blue-500 mx-auto mb-6" />
                        <h2 className="font-bold text-2xl mb-3">Email</h2>
                        <p className="text-gray-600">info@example.com</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default OurLocation;
