import React from 'react';

interface LodgingCardProps {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    onBook: () => void;
}

const LodgingCard: React.FC<LodgingCardProps> = ({ title, description, price, imageUrl, onBook }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
                <p className="text-gray-900 font-bold text-xl mt-2">${price} per night</p>
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

export default LodgingCard;