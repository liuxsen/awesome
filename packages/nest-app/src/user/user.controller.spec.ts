import { TestingModule, Test } from '@nestjs/testing'
import { UserController } from './user.controller'
import { UserService } from './user.service'
describe('UserController', () => {
  let app: TestingModule

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [
        UserController
      ],
      providers: [
        UserService
      ]
    }).compile()
  })
  describe('create user', () => {
    it('should return the user body', () => {
      const controller = app.get(UserController)
      const body = { password: '1', phone: '1', email: '1' }
      expect(controller.create({ password: '1', phone: '1', email: '1' })).toStrictEqual(body)
    })
  })

  describe('find one user with id', () => {
    it('should return the type nubmer', () => {
      const controller = app.get(UserController)
      expect(controller.getUserById(1)).toBe('number')
    })
  })
})
