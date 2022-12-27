import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 40,
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 40,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 50,
  },
  picturePath: {
    type: String,
    default: '',
  },
  friends: {
    type: Array,
    default: [],
  },
});
