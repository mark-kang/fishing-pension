import React from 'react';

interface BoatCardProps {
    name: string;
    image: string;
    description: string;
    price: number;
    onBook: () => void;
}

const BoatCard: React.FC<BoatCardProps> = ({ name, image, description, price, onBook }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={image} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">{description}</p>
                <p className="text-gray-900 font-bold text-lg mt-2">${price} / day</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button 
                    onClick={onBook} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default BoatCard;