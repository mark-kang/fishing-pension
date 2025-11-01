import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="hero bg-blue-500 text-white p-10 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Sinchang Fishing Lodging</h1>
            <p className="text-lg mb-6">Experience the best fishing adventures in Jeju Island.</p>
            <a href="/booking" className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200">
                Reserve Your Spot
            </a>
        </div>
    );
};

export default Hero;