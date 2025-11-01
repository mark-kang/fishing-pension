import { Booking } from '../models/booking.model';
import { db } from '../db';
import { BookingData } from '../types';

export const createBooking = async (bookingData: BookingData): Promise<Booking> => {
    const booking = new Booking(bookingData);
    await db.collection('bookings').insertOne(booking);
    return booking;
};

export const getBookingById = async (id: string): Promise<Booking | null> => {
    return await db.collection('bookings').findOne({ _id: id });
};

export const getAllBookings = async (): Promise<Booking[]> => {
    return await db.collection('bookings').find().toArray();
};

export const updateBooking = async (id: string, bookingData: BookingData): Promise<Booking | null> => {
    await db.collection('bookings').updateOne({ _id: id }, { $set: bookingData });
    return getBookingById(id);
};

export const deleteBooking = async (id: string): Promise<boolean> => {
    const result = await db.collection('bookings').deleteOne({ _id: id });
    return result.deletedCount === 1;
};