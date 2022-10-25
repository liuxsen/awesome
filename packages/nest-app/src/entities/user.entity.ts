import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { SexEnum } from '../common/enum'
import { RoleEntity } from './role.entity'

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ comment: '用户名称', default: null })
  name: string

  @Column({ comment: '用户出生日期', default: null })
  birthday: Date

  @Column({ comment: '邮箱' })
  email: string

  @Column({ comment: '密码', select: false })
  password: string

  @Column({ comment: '密码hash', select: false })
  pwdHash: string

  @Column({ comment: '手机号', default: null })
  phone: string

  @Column({
    type: 'enum',
    enum: SexEnum,
    default: SexEnum.None,
    comment: '性别'
  })
  sex: SexEnum

  @ManyToMany(() => RoleEntity, role => role.users, {
  })
  roles: RoleEntity[]
}
