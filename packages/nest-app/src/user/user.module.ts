import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from '../entities/user.entity'
import { UserService } from './user.service'
import { RoleEntity } from '../entities/role.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      RoleEntity
    ])
  ],
  providers: [
    UserService
  ],
  controllers: [
    UserController
  ]
})
export class UserModule {}
