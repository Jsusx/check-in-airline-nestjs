import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { FlightService } from 'src/services/flight/flight.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from 'src/entities/flight.entity';
import { BoardingPassMap } from 'src/entities/boardingPassMap.entity';
import { Seat } from 'src/entities/seat.entity';


@Module({
  controllers: [FlightController],
  imports: [TypeOrmModule.forFeature([Flight, BoardingPassMap, Seat])],
  providers: [FlightService]
})
export class FlightModule {}
