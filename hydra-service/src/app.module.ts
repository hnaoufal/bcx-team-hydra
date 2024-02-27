import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PromptModule } from './prompt/prompt.module';
import { MapController } from './map/map.controller';
import { MapModule } from './map/map.module';
import { SusController } from './sus/sus.controller';
import { SusModule } from './sus/sus.module';

@Module({
  imports: [PromptModule, MapModule, SusModule],
  controllers: [AppController, MapController, SusController],
  providers: [AppService],
})
export class AppModule {}
