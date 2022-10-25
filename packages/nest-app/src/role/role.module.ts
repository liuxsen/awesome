import { Module } from '@nestjs/common'
import { RoleController } from './role.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RoleEntity } from '../entities/role.entity'
import { RoleService } from './role.service'
import { UserEntity } from '../entities/user.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RoleEntity,
      UserEntity
    ])
  ],
  providers: [
    RoleService
  ],
  controllers: [
    RoleController
  ]
})
export class RoleModule {}
