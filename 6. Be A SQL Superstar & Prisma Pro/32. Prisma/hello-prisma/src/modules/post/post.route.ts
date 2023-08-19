import express from 'express';
import { PostController } from './post.controller';

const router = express.Router();

router.post('/create-post', PostController.insertIntoDB);

export const PostRoutes = router;
