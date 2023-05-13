import { NextFunction, Request, Response } from 'express';
import { createUserToDB, getUsersFromDB } from './user.services';

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getUsersFromDB();

  res.status(200).send({
    success: true,
    message: 'Users found successfully',
    data: users,
  });
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;

  const user = await createUserToDB(data);

  res.status(200).send({
    success: true,
    message: 'User created successfully',
    data: user,
  });
};
