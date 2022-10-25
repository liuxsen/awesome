import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { NestExpressApplication } from '@nestjs/platform-express'
import { ValidationPipe } from '@nestjs/common'

async function bootStrap () {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }))

  const config = new DocumentBuilder()
    .setTitle('Server Api')
    .setDescription('api description')
    .setVersion('1.0')
    // .addTag('cats')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  await app.listen(3000)
  console.log('server is runner at http://localhost:3000')
}

bootStrap()
