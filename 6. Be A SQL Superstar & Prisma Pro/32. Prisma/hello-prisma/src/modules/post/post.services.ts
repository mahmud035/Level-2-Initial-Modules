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
  const { sortBy, sortOrder, searchTerm, page, limit } = options;
  const skip = parseInt(limit) * parseInt(page) - parseInt(limit) || 0;
  const take = parseInt(limit) || 10;

  const result = await prisma.post.findMany({
    // Pagination (Interesting)
    skip: skip,
    take: take,

    // NOTE: Same as Mongoose Populate (Interesting)
    include: {
      author: true,
      category: true,
    },
    // Sorting
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

// IMPORTANT: Pagination Calculation
/**
 * limit = 5
 * page = 2
 * totalData = 20
 * take = limit
 * skip = (limit * page) - limit
 *      = 5 * 1 - 5 => 0
 *      = 5 * 2 - 5 => 5
 *      = 5 * 3 - 5 => 10
 *      = 5 * 4 - 5 => 15
 * 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
 * */
