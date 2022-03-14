import { NestFactory } from '@nestjs/core'
import { AppModule } from '@main/module/app'
import { config } from 'dotenv'

async function main() {
  config()

  const { APPLICATION_PORT = '', APPLICATION_URI_PREFIX = '' } = process.env
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix(APPLICATION_URI_PREFIX)

  app.listen(APPLICATION_PORT)
}

main()
