import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './api/app/app.module';
import helmet from 'helmet';
import csurf from 'csurf';
import cookieParser from 'cookie-parser';
import { Logger } from '@nestjs/common';
import { MyLogger } from './config/logger';
declare const module: any;

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
      logger: new MyLogger(),
    });
    app.enableCors({
      origin: ['http://localhost:3000', '*'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      credentials: true,
    });
    app.use(helmet());
    app.use(csurf());
    app.use(cookieParser());

    await app.listen(3000);

    if (module.hot) {
      module.hot.accept();
      module.hot.dispose(() => app.close());
    }
  } catch (error) {
    Logger.error(`❌  Error starting server, ${error}`, '', 'Bootstrap', false);
    process.exit();
  }
}
bootstrap();
