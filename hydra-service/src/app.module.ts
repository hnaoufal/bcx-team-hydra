import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PromptModule } from './prompt/prompt.module';

@Module({
  imports: [PromptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
