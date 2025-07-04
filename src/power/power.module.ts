import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports: [PowerService], // Exporting PowerService to make it available in other modules
})
export class PowerModule {}
