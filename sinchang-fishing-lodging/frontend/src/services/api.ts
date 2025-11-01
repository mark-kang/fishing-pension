import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Update with your backend URL

export const fetchLodgings = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/lodgings`);
        return response.data;
    } catch (error) {
        console.error('Error fetching lodgings:', error);
        throw error;
    }
};

export const fetchBoats = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/boats`);
        return response.data;
    } catch (error) {
        console.error('Error fetching boats:', error);
        throw error;
    }
};

export const createBooking = async (bookingData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);
        return response.data;
    } catch (error) {
        console.error('Error creating booking:', error);
        throw error;
    }
};