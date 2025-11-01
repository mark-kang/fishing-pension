import { Router } from 'express';
import bookingsController from '../controllers/bookings';
import boatsController from '../controllers/boats';
import lodgingsController from '../controllers/lodgings';

const router = Router();

// Booking routes
router.post('/bookings', bookingsController.createBooking);
router.get('/bookings/:id', bookingsController.getBooking);
router.get('/bookings', bookingsController.getAllBookings);

// Boat routes
router.post('/boats', boatsController.createBoat);
router.get('/boats/:id', boatsController.getBoat);
router.get('/boats', boatsController.getAllBoats);

// Lodging routes
router.post('/lodgings', lodgingsController.createLodging);
router.get('/lodgings/:id', lodgingsController.getLodging);
router.get('/lodgings', lodgingsController.getAllLodgings);

export default router;