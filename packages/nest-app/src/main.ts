import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'

import { NestExpressApplication } from '@nestjs/platform-express'

async function bootStrap () {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  await app.listen(3000)
  console.log(`server is runner at http://localhost:3000`)
}

bootStrap()