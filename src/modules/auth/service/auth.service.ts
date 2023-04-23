import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/modules/user/service/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  async validateUserCreds(email: string, password: string): Promise<any> {
    const user = await this.userService.getUserByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid Credentials');
    const isPasswordMatches = bcrypt.compareSync(password, user.password);
    if (!isPasswordMatches) {
      throw new UnauthorizedException('Invalid Credentials');
    }
    return user;
  }

  async generateToken(user: any) {
    return {
      access_token: this.jwtService.sign({
        name: user.name,
        sub: user.id,
      }),
    };
  }
}
