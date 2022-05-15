import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { authCredentialDto } from './auth-credential.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delete(id: number) {
    throw new Error('Method not implemented.');
  }
  constructor(private userRepository: UserService) {}

  async signUp(body: authCredentialDto): Promise<any> {
    return this.userRepository.createUser(body);
  }

  // async signIn(body: authCredentialDto): Promise<string> {
  //   const { email, password } = body;
  //   const user = this.userRepository.findOne({ email });
  //   if (user && (await bcrypt.compare(password, user.password))) {
  //     return 'success';
  //   } else {
  //     throw new UnauthorizedException('Please check your login');
  //   }
  // }
}
