import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { RoleCreateDto } from './dto/role.create.dto'
import { RoleUpdateDto } from './dto/role.update.dto'
import { RoleService } from './role.service'

@ApiTags('role')
@Controller('role')
export class RoleController {
  constructor (
    private readonly roleService: RoleService
  ) {}

  @Get()
  list () {
    return this.roleService.list()
  }

  @Post()
  create (
    @Body() body: RoleCreateDto
  ) {
    return this.roleService.create(body)
  }

  @Get(':id')
  getRoleById (
    @Param('id') id: number
  ) {
    return this.roleService.getById(id)
  }

  @Get(':id/users')
  getUsers (
    @Param('id') id: number
  ) {
    return this.roleService.getUsers(id)
  }

  @Put(':id')
  async updateRole (
    @Param('id') id: number,
    @Body() body: RoleUpdateDto
  ) {
    await this.roleService.updateRole(id, body)
    return true
  }
}
