import React, { useState } from 'react';
import type { Integrante } from '../interfaces/integrante.interface';
import Card from './Card';

interface SliderProps {
    data: Integrante[];
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
                    <div key={index} className="w-1/3 h-fit p-6 m-auto">
                        <Card data={item} />
                    </div>
                ))}
            </div>
            <button
                onClick={handlePrevSlide}
                className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-3"
            >
                &lt;
            </button>
            <button
                onClick={handleNextSlide}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white rounded-full p-3"
            >
                &gt;
            </button>
        </div>
    );
};

export default Slider;
