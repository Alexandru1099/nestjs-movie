import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from 'src/user/user.repository';
import { UserService } from 'src/user/user.service';
import { authCredentialDto } from './auth-credential.dto';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserService) {}

  async singUp(body: authCredentialDto): Promise<any> {
    return this.userRepository.createUser(body);
  }
}
