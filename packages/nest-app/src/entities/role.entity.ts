import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { UserEntity } from './user.entity'

@Entity()
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ comment: '角色名称', default: null })
  name: string

  @ManyToMany(() => UserEntity, user => user.roles
    // {
    //   cascade: true, // 允许在数据库中插入或者更新相关对象
    //   createForeignKeyConstraints: false
    // }
  )
  @JoinTable()
  users: UserEntity[]
}
