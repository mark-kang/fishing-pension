import { Request, Response } from 'express';
import Lodging from '../models/lodging.model';

// Get all lodgings
export const getLodgings = async (req: Request, res: Response) => {
    try {
        const lodgings = await Lodging.find();
        res.status(200).json(lodgings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching lodgings', error });
    }
};

// Get lodging by ID
export const getLodgingById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const lodging = await Lodging.findById(id);
        if (!lodging) {
            return res.status(404).json({ message: 'Lodging not found' });
        }
        res.status(200).json(lodging);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching lodging', error });
    }
};

// Create a new lodging
export const createLodging = async (req: Request, res: Response) => {
    const newLodging = new Lodging(req.body);
    try {
        const savedLodging = await newLodging.save();
        res.status(201).json(savedLodging);
    } catch (error) {
        res.status(400).json({ message: 'Error creating lodging', error });
    }
};

// Update lodging by ID
export const updateLodging = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedLodging = await Lodging.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedLodging) {
            return res.status(404).json({ message: 'Lodging not found' });
        }
        res.status(200).json(updatedLodging);
    } catch (error) {
        res.status(400).json({ message: 'Error updating lodging', error });
    }
};

// Delete lodging by ID
export const deleteLodging = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const deletedLodging = await Lodging.findByIdAndDelete(id);
        if (!deletedLodging) {
            return res.status(404).json({ message: 'Lodging not found' });
        }
        res.status(200).json({ message: 'Lodging deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting lodging', error });
    }
};