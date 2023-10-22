import { Module } from '@nestjs/common';

import { HelloWorldController } from './hello-world.controller';

@Module({
  imports: [],
  controllers: [HelloWorldController],
  providers: [],
})
export class HelloWorldModule {}
