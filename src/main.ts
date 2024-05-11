//main entry point of the appl
import { NestFactory } from '@nestjs/core';//nestfactory is a tool provide to create new nest js proj
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);//create instace of the nestjs application using app module
  await app.listen(3000);
}
bootstrap();
