import { Module } from '@nestjs/common';
import { userProviders } from './repository/user.providers';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [...userProviders, UserService],
  exports: [UserService],
})
export class UserModule {}
