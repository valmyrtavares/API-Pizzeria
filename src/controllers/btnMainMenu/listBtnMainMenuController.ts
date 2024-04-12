import { FastifyRequest, FastifyReply } from 'fastify';
import { ListBtnMainMenuService } from '../../service/btnMainMenu/listBtnMainMenuService';

class ListBtnMainMenuController {
  async handle(request: FastifyRequest, replay: FastifyReply) {
    const listbtnMainMenuService = new ListBtnMainMenuService();

    const btnMainMenu = await listbtnMainMenuService.execute();

    replay.send(btnMainMenu);
  }
}
export { ListBtnMainMenuController };
