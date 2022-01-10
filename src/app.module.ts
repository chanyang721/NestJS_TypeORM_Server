import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserModule } from './users/user.module';
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
    MoneyModule,
    CategoryModule,
    LevelModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
