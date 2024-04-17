import { useState } from "react";

const BannerSection = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{ img: "https://i.ibb.co/dQZ9mn1/3d-rendering-house-model-23-2150799629.jpg", title: "Meet with Our Dream Home", des: "Welcome to our dream home haven, where every corner whispers stories of comfort, elegance, and the cherished memories waiting to be made in spaces designed just for you." }, { img: "https://i.ibb.co/HgvxJsV/modern-luxury-domestic-room-comfortable-relaxation-generative-ai-188544-12679.jpg", title: "Elysian Estates: Your Perfect Dream Home Awaits", des: "Unlock the door to your dream retreat, where every room is infused with warmth, every window frames a picturesque view, and every moment feels like a hug from home." }, { img: "https://i.ibb.co/p1xhp8w/beach-luxury-living-sea-view-3d-rendering-48271-65.jpg", title: "Whispering Pines Retreat: Where Dreams Take Root", des: "Step into the embrace of your dream sanctuary, where laughter echoes in every room, and every detail is a love letter to the life you've always imagined." }, { img: "https://i.ibb.co/7RrFsC2/vertical-green-wall-modern-living-room-interior-3d-render-269031-282.jpg", title: "Serene Haven: Your Dream Home Oasis", des: "Welcome to your enchanted abode, where every sunrise brings promise, every sunset whispers tranquility, and every room holds space for your fondest dreams to unfold." }, { img: "https://i.ibb.co/LpgVyc8/modern-villa-luxury-house-with-pool-tropical-plants-night-788189-10150.jpg", title: "Evergreen Haven: Where Dreams Blossom into Reality", des: "Evergreen Haven: Where Dreams Blossom into Reality evokes the timeless allure of a home nestled in nature, promising an idyllic sanctuary where aspirations flourish and dreams take flight." },];
    const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliders.length - 1 : currentSlider - 1);
    const nextSlider = () => setCurrentSlider((currentSlider) => currentSlider === sliders.length - 1 ? 0 : currentSlider + 1);
    const isSmallScreen = window.innerWidth <= 768;
    return (
        <div className="w-full h-60 sm:h-96 md:h-[540px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden"
            style={{ backgroundImage: `url(${currentSlider === 0 ? sliders[sliders.length - 1].img : sliders[currentSlider - 1].img})` }}>
            {/* arrow */}
            <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
                {/* arrow left */}
                <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                </button>
                {/* arrow right */}
                <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                    <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0095FF" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g></svg>
                </button>
            </div>
            {/* text container here */}
            <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
                <h1 className="lg:text-3xl mb-3 animate__animated animate__backInLeft">{sliders[currentSlider].title}</h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg animate__animated animate__backInLeft">{sliders[currentSlider].des}</p>
            </div>
            {/* slider container */}
            <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
                <div className="ease-linear duration-300 flex gap-2 md:gap-4 items-center"
                    style={{ transform: `translateX(-${currentSlider * (isSmallScreen ? 98 : 200)}px)` }}>
                    {/* sliders */}
                    {sliders.map((slide, inx) => (
                        <img key={inx} src={slide.img}
                            className={`h-[150px] sm:h-[180px] lg:h-[300px] min-w-[120px] md:min-w-[150px] lg:min-w-[220px] ${currentSlider - 1 === inx ? 'scale-0' : 'scale-100 delay-500'
                                } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
                            alt={slide.title} />
                    ))}
                </div>
            </div>






            

        </div>
    );
};

export default BannerSection;
