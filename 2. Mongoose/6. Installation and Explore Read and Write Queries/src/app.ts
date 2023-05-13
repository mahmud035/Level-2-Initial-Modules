import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { Schema, model } from 'mongoose';

const app: Application = express();

//* Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', (req: Request, res: Response, next: NextFunction) => {
  // NOTE: Inserting a test data into mongodb
  /**
   * Step1: Create an Interface
   * Step2: Create a Schema
   * Step3: Create a Model
   * Step4: Connect to MongoDB (Database Query)
   * */

  // Step1: Create an Interface
  interface IUser {
    id: string;
    role: 'student';
    password: string;
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: 'male' | 'female';
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }

  // Step2: Create a Schema Using The Interface
  const userSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String },
      lastName: { type: String, required: true },
    },
    dateOfBirth: { type: String },
    gender: { type: String, enum: ['male', 'female'] },
    email: { type: String },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
  });

  // Step3: Create a Model
  const User = model<IUser>('User', userSchema);

  // Step4: Database Query on Model
  const createUser = async () => {
    const user = new User({
      id: '444',
      role: 'student',
      password: '123abc',
      name: {
        firstName: 'John',
        lastName: 'Doe',
      },
      dateOfBirth: 'March 1990',
      email: 'john@gmail.com',
      contactNo: '019999999',
      emergencyContactNo: '017777',
      presentAddress: 'Gopalganj',
      permanentAddress: 'Grave',
    });

    await user.save();
  };

  createUser();

  res.send({
    success: true,
    message: 'User added to database',
  });
});

export default app;
