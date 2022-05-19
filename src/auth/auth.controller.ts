import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { authCredentialDto } from './auth-credential.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() body: authCredentialDto): Promise<void> {
    return await this.authService.signUp(body);
  }

  @Post('signin')
  async signIn(
    @Body() body: authCredentialDto,
  ): Promise<{ accessToken: string }> {
    return await this.authService.signIn(body);
  }

  @Post('test')
  @UseGuards(AuthGuard())
  test(@Req() req){
    console.log(req)
  }

}
