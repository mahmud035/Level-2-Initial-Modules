import { IUser } from './user.interface';
import { User } from './user.model';

export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);

  await user.save(); // save user to database
  return user; // return the user
};
