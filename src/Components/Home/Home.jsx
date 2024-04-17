import { Helmet } from "react-helmet";
import BannerSection from "../BannerSection/BannerSection";
import EstateSection from "../EstateSection/EstateSection";
import OurServices from "../OurServices/OurServices";


const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <BannerSection></BannerSection>
            <EstateSection></EstateSection>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;