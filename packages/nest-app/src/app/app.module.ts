import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from '../user/user.module'
import { RoleModule } from '../role/role.module'

@Module({
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 33061,
      username: 'root',
      password: '123456',
      database: 'db',
      // entities: [],
      autoLoadEntities: true,
      // TODO: Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
      synchronize: true
    }),
    UserModule,
    RoleModule
  ]
})
export class AppModule {}
