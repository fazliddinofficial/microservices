import { NestFactory } from '@nestjs/core';
import { RiderServiceModule } from './rider-service.module';

async function bootstrap() {
  const app = await NestFactory.create(RiderServiceModule);
  await app.listen(3001);
}
bootstrap();
