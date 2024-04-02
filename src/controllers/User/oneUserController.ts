import { FastifyRequest, FastifyReply } from 'fastify';
import { OneUserService } from '../../service/User/oneUserService';

class OneUserController {
  async handle(request: FastifyRequest, replay: FastifyReply) {
    const { id } = request.query as { id: string };

    const oneUserController = new OneUserService();

    const user = await oneUserController.execute({ id });
    replay.send(user);
  }
}
export { OneUserController };
