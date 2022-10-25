import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { UserCreateDto } from './dto/user.create.dto'
import { UserUpdateDto } from './dto/user.update.dto'
import { UserService } from './user.service'

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor (
    private readonly userService: UserService
  ) {}

  @Get()
  list () {
    return this.userService.list()
  }

  @Post()
  create (
    @Body() body: UserCreateDto
  ) {
    return this.userService.create(body)
  }

  @Get(':id')
  getUserById (
    @Param('id') id: number
  ) {
    return this.userService.getUserById(id)
  }

  @Get(':id/roles')
  getRolesById (
    @Param('id') id: number
  ) {
    return this.userService.getRoles(id)
  }

  @Put(':id')
  updateUser (
    @Param('id') id: number,
    @Body() body: UserUpdateDto
  ) {
    return this.userService.updateUser(id, body)
  }
}
