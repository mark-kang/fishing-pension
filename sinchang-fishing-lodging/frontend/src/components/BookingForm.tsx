import React, { useState } from 'react';

const BookingForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [boatType, setBoatType] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ name, email, date, boatType, message });
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <h2 className="text-xl font-bold mb-4">Book Your Fishing Experience</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block mb-1">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border rounded p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border rounded p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="date" className="block mb-1">Date</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="border rounded p-2 w-full"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="boatType" className="block mb-1">Boat Type</label>
                <select
                    id="boatType"
                    value={boatType}
                    onChange={(e) => setBoatType(e.target.value)}
                    required
                    className="border rounded p-2 w-full"
                >
                    <option value="">Select a boat</option>
                    <option value="small">Small Boat</option>
                    <option value="medium">Medium Boat</option>
                    <option value="large">Large Boat</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border rounded p-2 w-full"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded p-2">Submit Booking</button>
        </form>
    );
};

export default BookingForm;