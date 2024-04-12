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

interface CreateBtnMenuProps {
  title: string;
  category: string;
  address: string;
  parent: string;
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

  async executeBtnMenu({
    title,
    category,
    address,
    parent,
  }: CreateBtnMenuProps) {
    console.log('Rota foi chamada');

    if (!title || !category || !address || !parent) {
      throw new Error('Preencha todos os campos');
    }

    const btnMainMenu = await prismaClient.btnMenu.create({
      data: {
        title,
        category,
        address,
        parent,
      },
    });

    return btnMainMenu;
  }
}

export { CreateService };
