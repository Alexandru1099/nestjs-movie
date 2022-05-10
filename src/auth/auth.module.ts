import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/user/user.entity';

@Module({
  imports: [UserModule],
  providers: [AuthService, UserService, User],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
