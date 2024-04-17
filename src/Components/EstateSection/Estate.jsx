import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Estate = ({ estate }) => {

    const { id,estate_title, segment_name, price, image, other_info } = estate;
    const { bedrooms, bathrooms, garage } = other_info;
    return (
        <div className="mx-auto max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B] animate__animated animate__bounceInRight">
            <img width={200} height={200} className="h-[275px] w-[350px] rounded-lg object-cover" src={image} alt="card navigate ui" />
            <div className="grid gap-2">
                <h1 className="text-lg font-semibold ">{estate_title}</h1>
                <p className="text-sm text-gray-500 dark:text-white/60">{segment_name}</p>
                <div className="text-lg font-semibold">{price}</div>
            </div>
            <div>
                <div className="flex w-full justify-between py-2">
                    <div className="space-y-1 text-center">
                        <p className="text-gray-500 dark:text-white/70">Bedrooms</p>
                        <p className="font-mono text-xl text-gray-700 dark:text-white/50">{bedrooms}</p>
                    </div>
                    <div className="space-y-1 text-center">
                        <p className="text-gray-500 dark:text-white/70">Bathrooms</p>
                        <p className="font-mono text-xl text-gray-700 dark:text-white/50">{bathrooms}</p>
                    </div>
                    {
                        garage ?
                            <div className="space-y-1 text-center ">
                                <p className="text-gray-500 dark:text-white/70">Garage</p>
                                <p className="font-mono text-xl text-gray-700 dark:text-white/50">{garage}</p>
                            </div> :
                            <span></span>
                    }
                </div>

            </div>
            <div className="flex gap-4">
                <Link to={`estate/${id}`}>
                    <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">View Property</button>
                </Link>
            </div>
        </div>
    );
};

Estate.propTypes = {
    estate: PropTypes.object.isRequired
};

export default Estate;
