import { Inject, Injectable } from '@nestjs/common';
import { UserRegisterDto } from '../_dto/user.dto';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { TYPES } from 'src/core/types';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(TYPES.UserModel) private readonly userRepostiory: Repository<User>,
  ) {}
  async register(userRegisterDto: UserRegisterDto): Promise<User> {
    const hashed_Password = bcrypt.hashSync(
      userRegisterDto.password,
      Number(process.env.SALT_ROUNDS),
    );
    const user = await this.userRepostiory.save({
      name: userRegisterDto.name,
      email: userRegisterDto.email,
      password: hashed_Password,
    });
    return user;
  }

  async getUserByEmail(email: string) {
    return this.userRepostiory.findOne({ where: { email } });
  }

  async getUserById(id: number): Promise<User | undefined> {
    return this.userRepostiory.findOne({ where: { id } });
  }
}
