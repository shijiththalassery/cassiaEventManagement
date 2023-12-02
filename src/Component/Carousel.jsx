import React, { useState } from 'react';

function Carousel() {
    const images = [
        'https://i.ytimg.com/vi/ly_eFwkZrl0/maxresdefault.jpg',
        'https://i.ytimg.com/vi/TSQ3jDxSdCo/maxresdefault.jpg',
        'https://wevaphotography.com/wp-content/uploads/2017/09/annaprashan-ceremony-kerala11.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    

    return (
        <div>
            <div className="relative w-full max-w-screen-lg mx-auto">
                <img
                    src={images[currentIndex]}
                    alt={`slide-${currentIndex}`}
                    className="w-full h-auto rounded-lg"
                />
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 focus:outline-none"
                    onClick={prevSlide}
                >
                    &lt;
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-2 focus:outline-none"
                    onClick={nextSlide}
                >
                    &gt;
                </button>
            </div>
        </div>
    )
}

export default Carousel
