import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '../users/users.service';
// import { Controller } from './.controller';
import { UsersModule } from '../users/users.module';
import { MoneyModule } from '../money/money.module';
import { CategoryModule } from '../category/category.module';
import { LevelModule } from '../level/level.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
