import { Module } from '@nestjs/common'
import { LoadAllUserInGroupController } from '@presentation/controller/loadAllUserInGroup.controller'

@Module({
  controllers: [LoadAllUserInGroupController]
})
export class AppModule {}
