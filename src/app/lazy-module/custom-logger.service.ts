import { LoggerServcie } from "../logger.service";

export class CustomLoggerService extends LoggerServcie {
  log(content) {
    console.log("This is Custom Logger!" + new Date() + content);
  }
}
