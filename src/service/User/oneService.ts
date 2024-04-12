import { PrismaClient } from '@prisma/client';
import prismaClient from '../../prisma';

interface pickOneUserProps {
  id: string;
}

class OneService {
  collection: string;
  constructor(collection: string) {
    this.collection = collection;
  }
  async execute({ id }: pickOneUserProps) {
    console.log(id);
    if (!id) {
      throw new Error('Solicitação inválida');
    }
    const findOneUser = await (
      prismaClient as PrismaClient & { [key: string]: any }
    )[this.collection].findFirst({
      where: {
        id: id,
      },
    });
    if (!findOneUser) {
      throw new Error('Cliente não existe');
    }
    return findOneUser;
  }
}

export { OneService };
