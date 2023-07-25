import React, { useState } from 'react';
import type { Integrantes } from '../seeds/integrantes';

interface SliderProps {
    data: Integrantes[];
}

const Slider: React.FC<SliderProps> = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : data.length - 1));
    };

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : 0));
    };

    const slidePercentage = 100 / data.length;

    return (
        <div className="relative overflow-hidden">
            <div
                className="flex transition-all duration-500"
                style={{
                    transform: `translateX(-${currentIndex * slidePercentage}%)`,
                    width: `${data.length * 100}%`,
                }}
            >
                {data.map((item, index) => (
                    <div key={index} className="w-1/3 p-4">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            {/* <img src={item.image} alt={item.name} className="w-full h-64 object-cover" /> */}
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                {/* <p className="text-blue-600 font-semibold">{item.contact}</p> */}
                                <p className='flex flex-wrap'>
                                    {item.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className='text-white bg-light-page-background rounded-full mb-2 mr-4 px-2
                                             py-1 shadow shadow-black hover:scale-110 transition-transform'
                                        >
                                            {tag}</span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={handlePrevSlide}
                className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2"
            >
                &lt;
            </button>
            <button
                onClick={handleNextSlide}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-2"
            >
                &gt;
            </button>
        </div>
    );
};

export default Slider;
