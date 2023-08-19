import { PrismaClient } from '@prisma/client';
import app, { port } from './app';

const prisma = new PrismaClient();

async function main() {
  app.listen(port, () => {
    console.log(`Server Up and Running`);
  });
}

main();
