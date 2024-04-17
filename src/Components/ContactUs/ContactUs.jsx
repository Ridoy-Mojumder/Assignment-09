
import { Helmet } from 'react-helmet';

const ContactUs = () => {
   

    return (
        <div className="max-w-lg mx-auto mt-8 p-8 border border-gray-200 rounded-lg shadow-lg">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us</title>
                <link rel="canonical" href="http://mysite.com/contact-us" />
            </Helmet>
            <h1 className="text-4xl font-semibold mb-6">You can message us</h1>
            <form className="space-y-4">
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 placeholder-gray-600 border border-gray-300 focus:outline-none focus:border-gray-400"
                        placeholder="Your Name"
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 placeholder-gray-600 border border-gray-300 focus:outline-none focus:border-gray-400"
                        placeholder="Your Email"
                        required
                    />
                </div>
                <div>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 placeholder-gray-600 border border-gray-300 focus:outline-none focus:border-gray-400"
                        placeholder="Your Message"
                        required
                    ></textarea>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="w-full py-3 bg-gray-800 text-white font-semibold rounded-lg transition duration-300 ease-in-out hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800">
                        Send Message
                    </button>
                </div>
            </form>
            <div className="mt-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                <p className="mb-2"><strong>Email:</strong> info@example.com</p>
                <p className="mb-2"><strong>Phone:</strong> +1 234 567 890</p>
                <p className="mb-2"><strong>Address:</strong> 123 Main Street, City, Country</p>
            </div>
        </div>
    );
};

export default ContactUs;
