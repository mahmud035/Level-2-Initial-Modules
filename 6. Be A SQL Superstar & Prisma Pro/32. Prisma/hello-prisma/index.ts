import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const postUser = await prisma.user.create({
    data: {
      email: 'fahim@ph.com',
      name: 'fahim',
      age: 34,
    },
  });

  const getAllUsers = await prisma.user.findMany();
  console.log(getAllUsers);
}

main();
