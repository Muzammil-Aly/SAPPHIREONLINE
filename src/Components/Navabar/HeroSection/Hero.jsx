import React from 'react'
import './Hero.css'

import React, { useEffect, useState } from 'react';
// import './Slider.css'; // Make sure to move the CSS to a separate file or use inline styles

function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % 4);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    const handleDotClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="slider">
            <div className="slides">
                <div className={`slide ${activeIndex === 0 ? 'active' : ''}`}>
                    <img src="https://pk.sapphireonline.pk/cdn/shop/files/Slider_Banner_d2bdc370-ce3b-4f45-a42e-fcfd64592178.jpg?v=1723202255&width=2000" alt="Slide 1" />
                </div>
                <div className={`slide ${activeIndex === 1 ? 'active' : ''}`}>
                    <img src="https://pk.sapphireonline.pk/cdn/shop/files/intermix-banner-without-text.jpg?v=1723113801&width=1400" alt="Slide 2" />
                </div>
                <div className={`slide ${activeIndex === 2 ? 'active' : ''}`}>
                    <img src="https://pk.sapphireonline.pk/cdn/shop/files/D2D-V-slider-banner.jpg?v=1723113801&width=2000" alt="Slide 3" />
                </div>
                <div className={`slide ${activeIndex === 3 ? 'active' : ''}`}>
                    <img src="https://pk.sapphireonline.pk/cdn/shop/files/kids-slider-banner_27fcf88e-52be-4380-91ae-12f782e21cee.jpg?v=1723113801&width=2000" alt="Slide 4" />
                </div>
            </div>
            <div className="dots">
                {[0, 1, 2, 3].map(index => (
                    <span
                        key={index}
                        className={`dot ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}










// function Hero() {
//   return (

//     <div>


//     </div>


//   )
// }

export default Hero



