import { Logger, ConsoleLogger } from '@nestjs/common';

export class MyLogger extends ConsoleLogger {
  error(message: string, stack?: string, context?: string) {
    super.error(message, stack, context);
  }
  log(message: string) {
    super.log(message);
  }
  warn(message: string) {
    super.warn(message);
  }
  debug(message: string) {
    super.debug(message);
  }
  verbose(message: string) {
    super.verbose(message);
  }
}
