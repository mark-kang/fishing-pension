import { Schema, model } from 'mongoose';

const bookingSchema = new Schema({
  customerName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  lodgingId: {
    type: Schema.Types.ObjectId,
    ref: 'Lodging',
    required: true,
  },
  boatId: {
    type: Schema.Types.ObjectId,
    ref: 'Boat',
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Booking = model('Booking', bookingSchema);

export default Booking;