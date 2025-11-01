import React from 'react';
import BoatCard from '../components/BoatCard';

const boatsData = [
    {
        id: 1,
        name: 'Fishing Boat A',
        description: 'A spacious boat perfect for a day of fishing.',
        price: 100,
        image: '/images/boat-a.jpg',
    },
    {
        id: 2,
        name: 'Fishing Boat B',
        description: 'Ideal for small groups, equipped with all necessary gear.',
        price: 150,
        image: '/images/boat-b.jpg',
    },
    {
        id: 3,
        name: 'Fishing Boat C',
        description: 'A comfortable boat with a cabin for resting.',
        price: 200,
        image: '/images/boat-c.jpg',
    },
];

const Boats: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Fishing Boat Rentals</h1>
            <p className="mb-6">Explore our selection of fishing boats available for rent. Perfect for a day out on the water!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {boatsData.map(boat => (
                    <BoatCard key={boat.id} boat={boat} />
                ))}
            </div>
        </div>
    );
};

export default Boats;