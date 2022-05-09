import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(@Req() req) {
    return req.user;
  }

  @Post()
  postUsers(@Body() body: JoinRequestDto) {
    this.usersService.postUsers(body.email, body.nickname, body.password);
  }

  @Post('login')
  login(@Req() req) {
    return req.user;
  }

  @Post('logout') // 어쩔수없이 express와 결합 (DI 불가)
  logout(@Req() req, @Res() res) {
    req.logout();
    res.clearCookie('connect-sid', { httpOnly: true });
    res.send('OK');
  }
}
