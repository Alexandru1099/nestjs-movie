import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { authCredentialDto } from './auth-credential.dto';

@Injectable()
export class AuthService {
  findOne: any;
  create: any;
  save: any;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delete(id: number) {
    throw new Error('Method not implemented.');
  }
  constructor(private userRepository: UserService) {}

  async singUp(body: authCredentialDto): Promise<any> {
    return this.userRepository.createUser(body);
  }
}
