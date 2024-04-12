import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateMainMenuService } from '../../service/btnMainMenu/CreateMainMenuService';

class CreateMainMenuController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { title, category, address } = request.body as {
      title: string;
      category: string;
      address: string;
    };

    const userService = new CreateMainMenuService();

    const user = await userService.execute({ title, category, address });

    reply.send(user);
  }
}
export { CreateMainMenuController };
