import { Request, Response } from 'express';
import { CategoryService } from './category.services';

const createCategory = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.createCategory(req.body);

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
  createCategory,
};
