import { useEffect, useState } from "react";
import Estate from "./Estate";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";


const EstateSection = () => {

    const [estates, setEstates] = useState([]);

    useEffect(() => {
        fetch("Estate.json")
            .then(res => res.json())
            .then(data => setEstates(data))
    }, [])

    return (
        <div className="px-10">
            
            <div className=" text-center pt-7">
                <div>
                    <div className="flex  py-4 text-3xl font-bold  ">
                        <Marquee pauseOnHover={true} speed={130}>
                            <Link className="mr-12" to='/'>Choose Your Dream Home</Link>
                        </Marquee>
                    </div>
                </div>

                <p className="pt-5 text-gray-500">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 pt-14 pb-20">
                {
                    estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>

        </div>
    );
};

export default EstateSection;