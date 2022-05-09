import { Body, Controller, Post } from '@nestjs/common';
import { authCredentialDto } from './auth-credential.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  singUp(@Body() body: authCredentialDto): Promise<void> {
    return this.authService.singUp(body);
  }
}
