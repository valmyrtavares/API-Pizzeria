import { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteUserService } from '../../service/User/DeleteUserService';

class DeleteUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };

    const userService = new DeleteUserService();

    const user = await userService.execute({ id });
  }
}
export { DeleteUserController };
