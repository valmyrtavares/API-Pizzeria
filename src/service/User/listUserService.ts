import { PrismaClient } from '@prisma/client';
import prismaClient from '../../prisma';

class ListUserService {
  collection: string;
  constructor(collecton: string) {
    this.collection = collecton;
  }
  async execute() {
    const user = this.collection;
    const users = await (prismaClient as PrismaClient & { [key: string]: any })[
      this.collection
    ].findMany();
    return users;
  }
}

export { ListUserService };
