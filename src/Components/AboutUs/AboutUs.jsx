import { Helmet } from "react-helmet";

export const TeamMemberCard = ({ name, position, imageUrl }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imageUrl} alt={`${name}'s profile`} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">{position}</p>
        </div>
    </div>
);

export const ProjectCard = ({ title, description, imageUrl }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
        </div>
    </div>
);

const AboutUs = () => {
    const teamMembers = [
        { name: 'John Doe', position: 'Founder & CEO', imageUrl: 'https://i.ibb.co/80cb1BW/young-bearded-man-with-striped-shirt-273609-5677.jpg' },
        { name: 'Jane Smith', position: 'Head of Residential Sales', imageUrl: 'https://i.ibb.co/gFR52Sk/handsome-businessman-suit-glasses-cross-arms-chest-look-176420-21750.jpg' },
        { name: 'Michael Johnson', position: 'Chief Architect', imageUrl: 'https://i.ibb.co/Q8CZP25/happy-young-caucasian-female-wearing-blue-long-sleeved-shirt-making-thumb-up-sign-176420-15015.jpg' },
        { name: 'Sarah Williams', position: 'Interior Designer', imageUrl: 'https://i.ibb.co/P6ywjWH/handsome-bearded-businessman-rubbing-hands-having-deal-176420-18778.jpg' },
        // Add more team members as needed
    ];

    const projects = [
        { title: 'Modern Apartments in Downtown', description: 'Luxurious apartments located in the heart of the city.', imageUrl: 'https://i.ibb.co/B2Tp0cs/luxury-bedroom-suite-resort-high-rise-hotel-with-working-table-105762-1783.jpg' },
        { title: 'Luxury Villas in Suburban Areas', description: 'Exquisite villas surrounded by nature in suburban areas.', imageUrl: 'https://i.ibb.co/HD6SzKW/hotel-balcony-with-tables-chairs-overlooking-surrounding-alps-lakes-cloudy-day-181624-21210.jpg' },
        { title: 'Family Homes in Picturesque Locations', description: 'Comfortable family homes nestled in scenic surroundings.', imageUrl: 'https://i.ibb.co/bs2sk52/bedroom-with-view-ocean-balcony-865967-311457.jpg' },
        // Add more projects as needed
    ];


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} name={member.name} position={member.position} imageUrl={member.imageUrl} />
                    ))}
                </div>
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Our Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} title={project.title} description={project.description} imageUrl={project.imageUrl} />
                        ))}
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Dream House Website</h2>
                    <p className="text-gray-700">
                        Our website, Dream House, is designed to provide you with comprehensive information about residential properties available for sale or rent. Explore our listings and find your dream home today!
                    </p>
                </div>
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                    <p className="text-gray-700">
                        If you have any questions or inquiries, feel free to <a href="/contactUs" className="text-blue-500 hover:underline">contact us</a>.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
