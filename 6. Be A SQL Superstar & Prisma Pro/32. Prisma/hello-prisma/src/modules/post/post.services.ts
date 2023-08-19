import { Post, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createPost = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({
    data,
    // NOTE: Same as Mongoose Populate (Interesting)
    include: {
      author: true,
      category: true,
    },
  });

  return result;
};

const getAllPost = async () => {
  const result = await prisma.post.findMany({
    // NOTE: Same as Mongoose Populate (Interesting)
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};

const getSinglePost = async (id: number) => {
  const result = await prisma.post.findUnique({
    where: {
      id,
    },
    // NOTE: Same as Mongoose Populate (Interesting)
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};

export const PostService = {
  createPost,
  getAllPost,
  getSinglePost,
};
