import { FastifyRequest, FastifyReply } from 'fastify';
import { OneService } from '../../service/User/oneService';

class OneController {
  collection: string;
  constructor(collection: string) {
    this.collection = collection;
  }

  async handle(request: FastifyRequest, replay: FastifyReply) {
    const { id } = request.query as { id: string };

    const oneController = new OneService(this.collection);

    const user = await oneController.execute({ id });
    replay.send(user);
  }
}
export { OneController };
