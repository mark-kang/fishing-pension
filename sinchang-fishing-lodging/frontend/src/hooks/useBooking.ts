import { useState } from 'react';

const useBooking = () => {
    const [bookingDetails, setBookingDetails] = useState({
        name: '',
        email: '',
        date: '',
        boatId: '',
        lodgingId: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setBookingDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const submitBooking = async () => {
        setIsLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch('/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingDetails),
            });

            if (!response.ok) {
                throw new Error('Failed to book. Please try again.');
            }

            setSuccess(true);
            setBookingDetails({
                name: '',
                email: '',
                date: '',
                boatId: '',
                lodgingId: '',
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        bookingDetails,
        isLoading,
        error,
        success,
        handleChange,
        submitBooking,
    };
};

export default useBooking;