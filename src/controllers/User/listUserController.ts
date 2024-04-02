import { FastifyRequest, FastifyReply } from 'fastify';
import { ListUserService } from '../../service/User/listUserService';

class ListCustomersController {
  async handle(request: FastifyRequest, replay: FastifyReply) {
    const listUserService = new ListUserService();

    const users = await listUserService.execute();

    replay.send(users);
  }
}
export { ListCustomersController };
