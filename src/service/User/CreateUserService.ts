import prismaClient from '../../prisma';

interface CreateUserProps {
  name: string;
  lastName: string;
  cellPhone: string;
}

class CreateUserService {
  async execute({ name, lastName, cellPhone }: CreateUserProps) {
    console.log('Rota foi chamada');

    if (!name || !lastName || !cellPhone) {
      throw new Error('Preencha todos os campos');
    }

    const user = await prismaClient.user.create({
      data: {
        name,
        lastName,
        cellPhone,
      },
    });

    return user;
  }
}
export { CreateUserService };
