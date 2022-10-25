import { IsArray, IsString } from 'class-validator'
export class RoleCreateDto {
  /** 角色名称 */
  @IsString()
  name: string

  /** 用户ids */
  @IsArray()
  userIds?: number[]
}
