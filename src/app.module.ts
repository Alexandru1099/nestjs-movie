import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import ormConfig from '../ormconfig';
import { UserModule } from './user/user.module';
import RolesModule from './roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
    ConfigModule,
    RolesModule,
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot(ormConfig),
  ],
})
export class AppModule {}
