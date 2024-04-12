import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from 'fastify';

import { CreateController } from './controllers/User/CreateController';
import { ListController } from './controllers/User/listUserController';
import { DeleteUserController } from './controllers/User/DeleteUserController';
import { OneUserController } from './controllers/User/oneUserController';
//import { CreateMainMenuController } from './controllers/btnMainMenu/CreateMainMenuController';
import { ListBtnMainMenuController } from './controllers/btnMainMenu/listBtnMainMenuController';

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
      return new CreateController('user').handleUser(request, reply);
    }
  );

  // ./routes
  fastify.get(
    '/users',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListController('user').handle(request, reply);
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

  fastify.post(
    '/btnMainMenu',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateController('btnMainMenu').handleBtnMainMenu(
        request,
        reply
      );
    }
  );

  fastify.get(
    '/btnMainMenus',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListController('btnMainMenu').handle(request, reply);
    }
  );

  fastify.delete(
    '/btnMainMenu',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteUserController().handle(request, reply);
    }
  );
}
