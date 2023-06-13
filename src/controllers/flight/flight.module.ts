import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { FlightService } from 'src/services/flight/flight.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from 'src/entities/flight.entity';


@Module({
  controllers: [FlightController],
  imports: [TypeOrmModule.forFeature([Flight])],
  providers: [FlightService]
})
export class FlightModule {}
