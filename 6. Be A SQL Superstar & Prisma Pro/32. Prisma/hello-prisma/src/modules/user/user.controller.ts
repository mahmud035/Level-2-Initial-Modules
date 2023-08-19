import { Request, Response } from 'express';
import { UserService } from './user.services';

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertIntoDB(req.body);

    res.json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const UserController = {
  insertIntoDB,
};
