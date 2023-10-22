import { Controller, Get } from '@nestjs/common';

@Controller('hello-world')
export class HelloWorldController {
  @Get()
  public welcome() {
    return { message: 'Hello from server!' };
  }
}
