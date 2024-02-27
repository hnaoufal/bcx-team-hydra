import { Module } from '@nestjs/common';
import { MapService } from './map.service';

@Module({
  providers: [MapService]
})
export class MapModule {}
