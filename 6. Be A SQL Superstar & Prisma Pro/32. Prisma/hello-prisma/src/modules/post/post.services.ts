import { Post, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const insertIntoDB = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
  });

  return result;
};

export const PostService = {
  insertIntoDB,
};
