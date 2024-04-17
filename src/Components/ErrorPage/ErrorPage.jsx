import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-red-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
                <p className="text-2xl font-semibold text-red-500 mb-8">Oops! Page not found.</p>
                <Link to="/" className="px-6 py-3 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition duration-300">
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
