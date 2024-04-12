import prismaClient from '../../prisma';

class ListBtnMainMenuService {
  async execute() {
    const btnMainMenu = await prismaClient.btnMainMenu.findMany();
    return btnMainMenu;
  }
}

export { ListBtnMainMenuService };
