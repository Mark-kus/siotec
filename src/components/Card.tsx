import type React from "react"
import type { Integrante } from "../interfaces/integrante.interface"

interface CardProps {
    data: Integrante
}

const Card: React.FC<CardProps> = ({ data }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">

            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{data.name}</h3>
                <p className="text-gray-600 mb-4">{data.description}</p>

                <p className='flex flex-wrap'>
                    {data.tags.map((tag, i) => (
                        <span
                            key={i}
                            className='text-white bg-light-page-background rounded-full mb-2 mr-4 px-2
                         py-1 shadow shadow-black hover:scale-105 transition-transform text-center'
                        >
                            {tag}
                        </span>
                    ))}
                </p>

            </div>

        </div>
    )
}

export default Card
