import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';

import { AppServerModule } from '../src/main.server';
import { HelloWorldModule } from './modules/hello-world/hello-world.module';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/browser'),
    }),
    HelloWorldModule,
  ],
})
export class AppModule {}
