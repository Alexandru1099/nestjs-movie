import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from 'src/user/user.repository';
import { authCredentialDto } from './auth-credential.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private userRepository: UsersRepository,
  ) {}

  async singUp(body: authCredentialDto): Promise<void> {
    return this.userRepository.createUser(body);
  }
}
