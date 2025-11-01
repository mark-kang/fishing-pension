import React from 'react';
import BookingForm from '../components/BookingForm';

const Booking: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Book Your Fishing Experience</h1>
            <p className="mb-4">Reserve your fishing boat and lodging in Sinchang Windmill Village, Jeju Island.</p>
            <BookingForm />
        </div>
    );
};

export default Booking;