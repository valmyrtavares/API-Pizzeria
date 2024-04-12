import { FastifyRequest, FastifyReply } from 'fastify';
import { ListUserService } from '../../service/User/listUserService';

class ListController {
  collection: string;
  constructor(collection: string) {
    this.collection = collection;
  }

  async handle(request: FastifyRequest, replay: FastifyReply) {
    const listUserService = new ListUserService(this.collection);

    const users = await listUserService.execute();

    replay.send(users);
  }
}
export { ListController };
