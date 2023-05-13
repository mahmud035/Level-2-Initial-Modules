import { User } from './user.model';

// Step4: Database Query On Model
export const createUserToDB = async () => {
  const user = new User({
    id: '888',
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

  return user;
};
