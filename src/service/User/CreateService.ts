import { PrismaClient } from '@prisma/client';
import prismaClient from '../../prisma';

interface CreateUserProps {
  name: string;
  lastName: string;
  cellPhone: string;
}

interface CreateBtnMainMenuProps {
  title: string;
  category: string;
  address: string;
}

class CreateService {
  collection: string;
  constructor(collecton: string) {
    this.collection = collecton;
  }

  async executeUser({ name, lastName, cellPhone }: CreateUserProps) {
    console.log('Rota foi chamada');

    if (!name || !lastName || !cellPhone) {
      throw new Error('Preencha todos os campos');
    }

    const user = await (prismaClient as PrismaClient & { [key: string]: any })[
      this.collection
    ].create({
      data: {
        name,
        lastName,
        cellPhone,
      },
    });

    return user;
  }

  async executeBtnMainMenu({
    title,
    category,
    address,
  }: CreateBtnMainMenuProps) {
    console.log('Rota foi chamada');

    if (!title || !category || !address) {
      throw new Error('Preencha todos os campos');
    }

    const btnMainMenu = await prismaClient.btnMainMenu.create({
      data: {
        title,
        category,
        address,
      },
    });

    return btnMainMenu;
  }
}

export { CreateService };
