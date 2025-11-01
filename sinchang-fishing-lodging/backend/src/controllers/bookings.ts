import { Request, Response } from 'express';
import { Booking } from '../models/booking.model';
import { createBooking, getBookings } from '../services/booking.service';

export const bookLodging = async (req: Request, res: Response) => {
    try {
        const bookingData = req.body;
        const newBooking = await createBooking(bookingData);
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ message: 'Error creating booking', error });
    }
};

export const listBookings = async (req: Request, res: Response) => {
    try {
        const bookings = await getBookings();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving bookings', error });
    }
};