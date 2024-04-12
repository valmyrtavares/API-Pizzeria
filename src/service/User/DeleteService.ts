import prismaClient from '../../prisma';
import { PrismaClient } from '@prisma/client';

interface DeleteUserProps {
  id: string;
}

class DeleteService {
  collection: string;
  constructor(collection: string) {
    this.collection = collection;
  }
  async execute({ id }: DeleteUserProps) {
    if (!id) {
      throw new Error('Solicitação inválida');
    }

    const findUser = await (
      prismaClient as PrismaClient & { [key: string]: any }
    )[this.collection].findFirst({
      where: {
        id: id,
      },
    });

    if (!findUser) {
      throw new Error('Cliente não existe');
    }
    await (prismaClient as PrismaClient & { [key: string]: any })[
      this.collection
    ].delete({
      where: {
        id: findUser.id,
      },
    });
    return { message: 'Deletada com sucesso' };
  }
}
export { DeleteService };
