import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from '../entities/user.entity'
import { UserCreateDto } from './dto/user.create.dto'
import { UserUpdateDto } from './dto/user.update.dto'
import { RoleEntity } from '../entities/role.entity'

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>
  ) {}

  list () {
    return this.userRepository.createQueryBuilder('user')
      .addSelect('user.password')
      .getMany()
  }

  async findRoles (ids: number[]) {
    const roles = await this.roleRepository.createQueryBuilder('role')
      .where('role.id IN (:...ids)', { ids })
      .execute()
    console.log(roles)
    return roles
  }

  async create (
    body: UserCreateDto
  ) {
    const user = this.userRepository.create(body)
    return await this.userRepository.save(user)
  }

  getUserById (id: number) {
    return this.userRepository.findOne({
      where: { id },
      relations: {
        roles: true
      }
    })
  }

  // 获取用户的角色列表
  getRoles (id: number) {
    return this.userRepository.findOne({
      where: {
        id
      },
      relations: {
        roles: true
      },
      // 筛选字段
      select: {
        id: true,
        roles: {
          id: true
        }
      }
    })
  }

  async updateUser (id: number, body: UserUpdateDto) {
    const { roleIds, ...rest } = body
    const roles = await this.roleRepository.createQueryBuilder('role')
      .where('role.id IN (:...ids)', { ids: roleIds })
      .getMany()
    const user = await this.userRepository.findOne({
      where: { id }
    })
    Object.assign(user, rest)
    user.roles = roles
    return this.userRepository.save(user)
  }
}
