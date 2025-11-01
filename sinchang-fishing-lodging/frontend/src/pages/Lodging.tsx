import React from 'react';
import LodgingCard from '../components/LodgingCard';

const lodgingOptions = [
    {
        id: 1,
        name: 'Ocean View Lodge',
        description: 'A beautiful lodge with stunning ocean views, perfect for relaxation.',
        price: 150,
        image: '/images/ocean-view-lodge.jpg',
    },
    {
        id: 2,
        name: 'Cozy Fisherman Cabin',
        description: 'A cozy cabin designed for fishermen, equipped with all essentials.',
        price: 100,
        image: '/images/fisherman-cabin.jpg',
    },
    {
        id: 3,
        name: 'Luxury Beach House',
        description: 'A luxurious beach house with modern amenities and direct beach access.',
        price: 300,
        image: '/images/luxury-beach-house.jpg',
    },
];

const Lodging: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Lodging Options</h1>
            <p className="mb-6">Explore our comfortable lodging options tailored for fishermen and their families.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {lodgingOptions.map((lodging) => (
                    <LodgingCard key={lodging.id} lodging={lodging} />
                ))}
            </div>
        </div>
    );
};

export default Lodging;