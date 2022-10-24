import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller('/')
export class AppController {
  private readonly appService: AppService
  constructor (
    appService: AppService
  ) {
    this.appService = appService
  }

  @Get()
  home () {
    return this.appService.getHome()
  }
}
