import { Schema, model } from 'mongoose';

const boatSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  rentalPrice: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
}, {
  timestamps: true,
});

const Boat = model('Boat', boatSchema);

export default Boat;