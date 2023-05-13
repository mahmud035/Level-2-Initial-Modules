import { NextFunction, Request, Response } from 'express';
import { createUserToDB } from './user.services';

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await createUserToDB();

  res.status(200).send({
    success: true,
    message: 'User created successfully',
    data: user,
  });
};
