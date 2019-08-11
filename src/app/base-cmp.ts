import { AppInjector } from "./AppInjector";
import { LoggerServcie } from "./logger.service";
import { Injector } from "@angular/core";

export abstract class BaseWithInjectorServiceComponent {
  logger: LoggerServcie;
  constructor(injector: Injector) {
    try {
      // this.logger = AppInjector.injector.get(LoggerServcie);
      this.logger = injector.get(LoggerServcie);
    } catch (error) {}
  }
}
