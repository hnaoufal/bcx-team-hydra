import { Module } from '@nestjs/common';
import { SusService } from './sus.service';

@Module({
  providers: [SusService]
})
export class SusModule {}
