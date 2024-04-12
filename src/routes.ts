import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from 'fastify';

import { CreateController } from './controllers/User/CreateController';
import { ListController } from './controllers/User/listUserController';
import { DeleteController } from './controllers/User/DeleteController';
import { OneController } from './controllers/User/oneController';
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
      return new DeleteController('user').handle(request, reply);
    }
  );

  fastify.get('/user', async (request: FastifyRequest, reply: FastifyReply) => {
    return new OneController('user').handle(request, reply);
  });

  //**********************BtnMainMenu ********************************* */

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
      return new DeleteController('btnMainMenu').handle(request, reply);
    }
  );

  fastify.get(
    '/btnMainMenu',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new OneController('btnMainMenu').handle(request, reply);
    }
  );

  //**********************BtnMenu ********************************* */

  fastify.post(
    '/btnMenu',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateController('btnMenu').handleBtnMainMenu(request, reply);
    }
  );

  fastify.get(
    '/btnMenus',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListController('btnMenu').handle(request, reply);
    }
  );

  fastify.delete(
    '/btnMenu',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteController('btnMenu').handle(request, reply);
    }
  );

  fastify.get(
    '/btnMenu',
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new OneController('btnMenu').handle(request, reply);
    }
  );
}
