import { Module } from '@nestjs/common';
import { AppController } from './api/app/app.controller';
import { AppService } from './api/app/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './api/users/users.service';
// import { Controller } from './.controller';
import { UsersModule } from './api/users/users.module';
import { MoneyModule } from './api/money/money.module';
import { CategoryModule } from './api/category/category.module';
import { LevelModule } from './api/level/level.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
    }),
    UsersModule,
    MoneyModule,
    CategoryModule,
    LevelModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
