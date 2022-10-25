import { IsArray, IsString } from 'class-validator'
export class UserCreateDto {
  /** 密码 */
  @IsString()
  password: string

  /** 手机号 */
  @IsString()
  phone: string

  /** 邮箱 */
  @IsString()
  email: string

  /** 角色 */
  @IsArray(
  )
  roleIds: number[]
}
