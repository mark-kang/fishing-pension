import { Schema, model } from 'mongoose';

const lodgingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  pricePerNight: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
    required: true,
  },
  availableDates: {
    type: [Date],
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
});

const Lodging = model('Lodging', lodgingSchema);

export default Lodging;