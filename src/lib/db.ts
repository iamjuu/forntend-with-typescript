import mongoose, { Schema, model, models } from 'mongoose';

// *************************
// Signup Schema
// *************************

const SignupSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Signup = models.Signup || model('Signup', SignupSchema);

// *************************
// Login Schema
// *************************

const LoginSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Login = models.Login || model('Login', LoginSchema);

// *************************
// Exporting Models
// *************************

export { Signup, Login };
