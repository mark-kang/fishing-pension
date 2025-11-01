import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    Sinchang Fishing Lodging
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link to="/lodging" className="hover:underline">Lodging</Link>
                        </li>
                        <li>
                            <Link to="/boats" className="hover:underline">Boats</Link>
                        </li>
                        <li>
                            <Link to="/booking" className="hover:underline">Booking</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:underline">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;