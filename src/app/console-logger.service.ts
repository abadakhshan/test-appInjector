import { LoggerServcie } from "./logger.service";

export class ConsoleLoggerService extends LoggerServcie {
  log(content: any) {
    console.log("This is Default Logger:" + content);
  }
}
