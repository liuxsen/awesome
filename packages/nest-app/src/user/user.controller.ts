import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { UserCreateDto } from './dto/user.create.dto'

@Controller('user')
export class UserController {
  @Post()
  create (
    @Body() body: UserCreateDto
  ) {
    return body
  }

  @Get(':id')
  getUserById (
    @Param('id') id: number
  ) {
    console.log(id, typeof id)
    return typeof id
  }
}
