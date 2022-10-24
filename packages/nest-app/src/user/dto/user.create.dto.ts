import { IsString } from 'class-validator'

export class UserCreateDto {
  @IsString()
  password: string

  @IsString()
  phone: string

  @IsString()
  email: string
}
