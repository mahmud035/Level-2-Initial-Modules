import { Request, Response } from 'express';
import { PostService } from './post.services';

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await PostService.insertIntoDB(req.body);

    res.json({
      success: true,
      message: 'Post created successfully',
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const PostController = {
  insertIntoDB,
};
