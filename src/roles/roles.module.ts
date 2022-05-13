import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesController } from './roles.controller';
import { Roles } from './roles.entity';
import { RolesService } from './roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([Roles]), ConfigModule],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [RolesService],
})
export default class RolesModule { }
