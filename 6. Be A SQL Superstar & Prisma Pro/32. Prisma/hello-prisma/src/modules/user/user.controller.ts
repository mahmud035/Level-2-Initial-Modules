import { Request, Response } from 'express';
import { UserService } from './user.services';

const createUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createUser(req.body);

    res.json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const createOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserService.createOrUpdateProfile(req.body);

    res.json({
      success: true,
      message: 'Profile created or updated successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUsers();

    res.json({
      success: true,
      message: 'Users retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const result = await UserService.getSingleUser(id);

    res.json({
      success: true,
      message: 'User retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const UserController = {
  createUser,
  createOrUpdateProfile,
  getUsers,
  getSingleUser,
};
