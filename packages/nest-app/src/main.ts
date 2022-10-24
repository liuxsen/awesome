import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'

import { NestExpressApplication } from '@nestjs/platform-express'
import { ValidationPipe } from '@nestjs/common'

async function bootStrap () {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }))
  await app.listen(3000)
  console.log('server is runner at http://localhost:3000')
}

bootStrap()
