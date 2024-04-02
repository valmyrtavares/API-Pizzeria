import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from 'fastify';

import { CreateUserController } from './controllers/User/CreateUserController';
import { ListCustomersController } from './controllers/User/listUserController';
import { DeleteUserController } from './controllers/User/DeleteUserController';
import { OneUserController } from './controllers/User/oneUserController';

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.get('/teste', (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true };
  });

  fastify.post(
    '/user',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateUserController().handle(request, reply);
    }
  );

  fastify.get(
    '/users',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListCustomersController().handle(request, reply);
    }
  );

  fastify.delete(
    '/user',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteUserController().handle(request, reply);
    }
  );

  fastify.get('/user', async (request: FastifyRequest, reply: FastifyReply) => {
    return new OneUserController().handle(request, reply);
  });
}
