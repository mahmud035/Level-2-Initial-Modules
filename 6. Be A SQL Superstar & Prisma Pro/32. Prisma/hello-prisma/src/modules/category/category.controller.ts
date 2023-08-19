import { Request, Response } from 'express';
import { CategoryService } from './category.services';

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.insertIntoDB(req.body);

    res.json({
      success: true,
      message: 'Category created successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const CategoryController = {
  insertIntoDB,
};
