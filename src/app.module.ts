import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import ormConfig from '../ormconfig';
import { UserModule } from './user/user.module';
import RolesModule from './roles/roles.module';
import ArticlesModule from './movies/movie.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
    ConfigModule,
    RolesModule,
    ArticlesModule,
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot(ormConfig),
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
