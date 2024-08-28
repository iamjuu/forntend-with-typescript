import type { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'bcrypt';
import { Signup } from '../../../lib/db';

const signupPost = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await Signup.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await hash(password, 10);
    const newUser = new Signup({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default signupPost;
