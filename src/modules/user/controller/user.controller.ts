import {
  Body,
  Controller,
  HttpStatus,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserRegisterDto } from '../_dto/user.dto';
import { User } from '../entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  async doUserRegistration(
    @Body(
      new ValidationPipe({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      }),
    )
    userRegisterDto: UserRegisterDto,
  ): Promise<User> {
    return this.userService.register(userRegisterDto);
  }
}
