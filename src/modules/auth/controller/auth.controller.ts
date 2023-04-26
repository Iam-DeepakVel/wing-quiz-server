import { Post, Controller, UseGuards, Request, Get } from '@nestjs/common';
import { LocalAuthGuard } from '../guard/local-auth.guard';
import { AuthService } from '../service/auth.service';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { AdminRoleGuard } from '../guard/admin-role.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: any): Promise<{ access_token: string }> {
    return this.authService.generateToken(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('current-user')
  getUser(@Request() req: any): Promise<any> {
    console.log(req);
    return req.user;
  }
}
