import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { RoleUpdateDto } from './dto/role.update.dto'
import { RoleEntity } from '../entities/role.entity'
import { RoleCreateDto } from './dto/role.create.dto'
import { UserEntity } from '../entities/user.entity'

@Injectable()
export class RoleService {
  constructor (
    @InjectRepository(RoleEntity)
    private readonly roleRepository: Repository<RoleEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async list () {
    return this.roleRepository.find()
  }

  async create (
    body: RoleCreateDto
  ) {
    const user = this.roleRepository.create(body)
    return await this.roleRepository.save(user)
  }

  getById (id: number) {
    return this.roleRepository.findOne({
      where: {
        id
      }
    })
  }

  async updateRole (id: number, body: RoleUpdateDto) {
    const role = await this.roleRepository.findOne({
      where: {
        id
      }
    })
    const { userIds } = body
    const users = await this.userRepository.createQueryBuilder('user')
      .where('user.id IN (:...ids)', { ids: userIds })
      .getMany()
    console.log(users)
    role.users = users
    const res = await this.roleRepository.save(role)
    console.log(res)
    return res
  }

  getUsers (roleId: number) {
    return this.roleRepository.findOne({
      where: {
        id: roleId
      },
      relations: {
        users: true
      }
    })
  }
}
