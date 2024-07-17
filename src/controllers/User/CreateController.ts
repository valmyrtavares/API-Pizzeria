import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateService } from '../../service/User/CreateService';

class CreateController {
  collection: string;
  constructor(collection: string) {
    this.collection = collection;
  }

  async handleUser(request: FastifyRequest, reply: FastifyReply) {
    const { name, lastName, cellPhone } = request.body as {
      name: string;
      lastName: string;
      cellPhone: string;
    };

    const userService = new CreateService(this.collection);

    const user = await userService.executeUser({ name, lastName, cellPhone });

    reply.send(user);
  }

  async handleBtnMainMenu(request: FastifyRequest, reply: FastifyReply) {
    const { title, category, address } = request.body as {
      title: string;
      category: string;
      address: string;
    };

    const userService = new CreateService(this.collection);

    const btnMainMenu = await userService.executeBtnMainMenu({
      title,
      category,
      address,
    });

    reply.send(btnMainMenu);
  }

  async handleBtnMenu(request: FastifyRequest, reply: FastifyReply) {
    const { title, category, address, parent } = request.body as {
      title: string;
      category: string;
      address: string;
      parent: string;
    };

    const userService = new CreateService(this.collection);

    const btnMainMenu = await userService.executeBtnMenu({
      title,
      category,
      address,
      parent,
    });

    reply.send(btnMainMenu);
  }

  async handleProduct(request: FastifyRequest, reply: FastifyReply) {
    const { title, comment, value, image, parent } = request.body as {
      title: string;
      comment: string;
      value: number;
      image: string;
      parent: string;
    };

    const productService = new CreateService(this.collection);

    const product = await productService.executeProduct({
      title,
      comment,
      value,
      image,
      parent,
    });

    reply.send(product);
  }

  async handleRequestItem(request: FastifyRequest, reply: FastifyReply) {
    const { size, price, title } = request.body as {
      size: number;
      price: number;
      title: string;
    };

    const productService = new CreateService(this.collection);

    const product = await productService.executeRequestItem({
      size,
      price,
      title,
    });

    reply.send(product);
  }

  async Request(request: FastifyRequest, reply: FastifyReply) {
    const { idCustomer, size, price, title } = request.body as {
      idCustomer: string;
      size: number;
      price: number;
      title: string;
    };

    const productService = new CreateService(this.collection);

    const product = await productService.executeRequest({
      idCustomer,
      size,
      price,
      title,
    });

    reply.send(product);
  }
}
export { CreateController };
