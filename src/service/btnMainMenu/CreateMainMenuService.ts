import prismaClient from '../../prisma';

interface CreateBtnMainMenuProps {
  title: string;
  category: string;
  address: string;
}

class CreateMainMenuService {
  async execute({ title, category, address }: CreateBtnMainMenuProps) {
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
export { CreateMainMenuService };
