import React from 'react';
import { Link } from 'react-router-dom';

const MobileNav: React.FC<{ isOpen: boolean; toggleNav: () => void }> = ({ isOpen, toggleNav }) => {
    return (
        <nav className={`fixed top-0 left-0 w-full bg-white shadow-md transition-transform transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="flex justify-between items-center p-4">
                <h1 className="text-xl font-bold">Sinchang Fishing Lodging</h1>
                <button onClick={toggleNav} className="text-xl">
                    &times;
                </button>
            </div>
            <ul className="flex flex-col p-4">
                <li className="py-2">
                    <Link to="/" onClick={toggleNav} className="text-blue-500">Home</Link>
                </li>
                <li className="py-2">
                    <Link to="/lodging" onClick={toggleNav} className="text-blue-500">Lodging</Link>
                </li>
                <li className="py-2">
                    <Link to="/boats" onClick={toggleNav} className="text-blue-500">Boats</Link>
                </li>
                <li className="py-2">
                    <Link to="/booking" onClick={toggleNav} className="text-blue-500">Booking</Link>
                </li>
                <li className="py-2">
                    <Link to="/about" onClick={toggleNav} className="text-blue-500">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default MobileNav;