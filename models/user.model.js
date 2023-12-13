import mongoose, { Schema } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      required: [true, 'password is required'],
      trim: true,
      //minlength: [6, 'password needs to be of 6 characters']
    },
    isVerified: {
      type: Boolean,
      defaultValue: false,
    },
    passCode: Number,
    avatar: String,
    hasPaid: Boolean,
    name: String,
    friends: [String],
    userType: String, // teacher, user
    stripeCustomerId: String,
  },
  { timestamps: true }
);

UserSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
    return next();
  }
  return next();
});

UserSchema.methods = {
  _hashPassword(password) {
    return hashSync(password);
  },
  authenticateUser(password) {
    return compareSync(password, this.password);
  },
  createToken() {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
  },
};

export default mongoose.model('User', UserSchema);
