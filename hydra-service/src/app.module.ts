import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PromptModule } from './prompt/prompt.module';
import { MapController } from './map/map.controller';
import { MapModule } from './map/map.module';
import { SusController } from './sus/sus.controller';
import { SusModule } from './sus/sus.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    PromptModule,
    MapModule,
    SusModule,
    ConfigModule.forRoot({ envFilePath: '.env' }),
  ],
  controllers: [AppController, MapController, SusController],
  providers: [AppService],
})
export class AppModule {}
