import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

// The bootstrap function is exported so that it can be used by serverless Functions.
export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env['PORT'] || 4000;

  app.setGlobalPrefix('api');
  app.enableShutdownHooks();
  app.getHttpAdapter().getInstance().disable('x-powered-by');

  await app.listen(PORT, () => {
    Logger.log(`🚀 Application is running on: http://localhost:${PORT}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  bootstrap().catch((err) => console.error(err));
}
