// BaseController.ts
import { FastifyRequest, FastifyReply } from 'fastify';

abstract class BaseController {
  abstract handle(request: FastifyRequest, reply: FastifyReply): Promise<void>;
}

export { BaseController };
