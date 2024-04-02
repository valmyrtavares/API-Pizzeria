import prismaClient from '../../prisma';

interface pickOneUserProps {
  id: string;
}

class OneUserService {
  async execute({ id }: pickOneUserProps) {
    if (!id) {
      throw new Error('Solicitação inválida');
    }
    const findOneUser = await prismaClient.user.findFirst({
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

export { OneUserService };
