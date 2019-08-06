import { BaseService } from "./base-service";
import { AppInjector } from "./AppInjector";

export abstract class BaseWithInjectorServiceComponent {
  service: BaseService;
  constructor() {
    // Mode 1:

    try {
      this.service = AppInjector.injector.get(BaseService);
    } catch (error) {
      console.log("can not inject loazyload provided service here");
    }
  }
}
