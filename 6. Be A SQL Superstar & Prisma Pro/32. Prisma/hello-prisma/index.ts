import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const postUser = await prisma.user.create({
    data: {
      email: 'fahim@ph.com',
      name: 'fahim',
      role: 'Instructor',
    },
  });

  const getAllUsers = await prisma.user.findMany();
  console.log(getAllUsers);
}

main();
