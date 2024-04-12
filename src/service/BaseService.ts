// BaseService.ts
abstract class BaseService {
  abstract execute(): Promise<any>;
}

export { BaseService };
