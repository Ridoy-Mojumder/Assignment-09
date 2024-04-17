const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-xl font-bold mb-4">Company</h2>
                        <ul className="text-gray-400">
                            <li>About Us</li>
                            <li>Our Team</li>
                            <li>Projects</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Services</h2>
                        <ul className="text-gray-400">
                            <li>Residential Sales</li>
                            <li>Commercial Sales</li>
                            <li>Property Management</li>
                            <li>Interior Design</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Legal</h2>
                        <ul className="text-gray-400">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Connect</h2>
                        <ul className="text-gray-400">
                            <li>Email: info@dreamhouse.com</li>
                            <li>Phone: +1234567890</li>
                            <li>Follow Us: Social Media Icons</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-500">
                    <p>&copy; 2024 Dream House. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
