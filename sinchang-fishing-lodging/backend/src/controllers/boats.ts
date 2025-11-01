import { Request, Response } from 'express';
import { Boat } from '../models/boat.model';

// Get all boats
export const getBoats = async (req: Request, res: Response) => {
    try {
        const boats = await Boat.find();
        res.status(200).json(boats);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving boats', error });
    }
};

// Get a single boat by ID
export const getBoatById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const boat = await Boat.findById(id);
        if (!boat) {
            return res.status(404).json({ message: 'Boat not found' });
        }
        res.status(200).json(boat);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving boat', error });
    }
};

// Create a new boat
export const createBoat = async (req: Request, res: Response) => {
    const newBoat = new Boat(req.body);
    try {
        const savedBoat = await newBoat.save();
        res.status(201).json(savedBoat);
    } catch (error) {
        res.status(400).json({ message: 'Error creating boat', error });
    }
};

// Update a boat by ID
export const updateBoat = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedBoat = await Boat.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBoat) {
            return res.status(404).json({ message: 'Boat not found' });
        }
        res.status(200).json(updatedBoat);
    } catch (error) {
        res.status(400).json({ message: 'Error updating boat', error });
    }
};

// Delete a boat by ID
export const deleteBoat = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedBoat = await Boat.findByIdAndDelete(id);
        if (!deletedBoat) {
            return res.status(404).json({ message: 'Boat not found' });
        }
        res.status(200).json({ message: 'Boat deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting boat', error });
    }
};