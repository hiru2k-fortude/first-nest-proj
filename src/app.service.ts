//service handling the bussiness logic

import { Injectable } from '@nestjs/common';

@Injectable() //this injectable marks a class as a provider
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
