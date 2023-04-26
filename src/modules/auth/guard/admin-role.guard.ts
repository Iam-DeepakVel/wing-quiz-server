import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UserRoles } from 'src/modules/user/enums/user.enum';
import { UserService } from 'src/modules/user/service/user.service';

// Guards will automatically return response as 403 if it returns false wherease middleware will return the exception that we are providing
@Injectable()
export class AdminRoleGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    // Return true only if the role of user is admin
    if (request?.user) {
      const { id } = request.user;
      const user = await this.userService.getUserById(id);
      return user.role === UserRoles.ADMIN;
    }
    // Return false if user is not admin
    return false;
  }
}
