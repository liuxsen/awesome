import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { SexEnum } from '../common/enum'

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ comment: '用户名称' })
  name: string

  @Column({ comment: '用户出生日期' })
  birthday: Date

  @Column({ comment: '邮箱' })
  email: number

  @Column({ comment: '密码' })
  password: string

  @Column({ comment: '手机号' })
  phone: string

  @Column({
    type: 'enum',
    enum: SexEnum,
    default: SexEnum.None,
    comment: '性别'
  })
  sex: SexEnum
}
