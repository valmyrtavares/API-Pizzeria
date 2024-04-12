import { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteService } from '../../service/User/DeleteService';

class DeleteController {
  collection: string;
  constructor(collection: string) {
    this.collection = collection;
  }

  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };

    const userService = new DeleteService(this.collection);

    const user = await userService.execute({ id });
  }
}
export { DeleteController };
