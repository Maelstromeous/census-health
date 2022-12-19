import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello there!<br>General Kenobi! You are a foolish one!';
  }
}
