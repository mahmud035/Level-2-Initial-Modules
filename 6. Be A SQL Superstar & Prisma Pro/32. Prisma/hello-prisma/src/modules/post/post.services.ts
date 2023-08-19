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

const getAllPost = async (options: any) => {
  const { sortBy, sortOrder, searchTerm } = options;

  const result = await prisma.post.findMany({
    // NOTE: Same as Mongoose Populate (Interesting)
    include: {
      author: true,
      category: true,
    },
    // Ordering
    orderBy:
      sortBy && sortOrder
        ? {
            [sortBy]: sortOrder,
          }
        : {
            createdAt: 'desc',
          },
    // Filtering
    where: {
      OR: [
        {
          title: {
            contains: searchTerm,
            mode: 'insensitive', // to remove case sensitive
          },
        },
        {
          author: {
            name: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
        },
        {
          category: {
            name: {
              contains: searchTerm,
              mode: 'insensitive',
            },
          },
        },
      ],
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
