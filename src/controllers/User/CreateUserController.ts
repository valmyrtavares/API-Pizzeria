import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateUserService } from '../../service/User/CreateUserService';

class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, lastName, cellPhone } = request.body as {
      name: string;
      lastName: string;
      cellPhone: string;
    };

    console.log(name);
    console.log(lastName);
    console.log(cellPhone);

    const userService = new CreateUserService();

    const user = await userService.execute({ name, lastName, cellPhone });

    reply.send(user);
  }
}
export { CreateUserController };
