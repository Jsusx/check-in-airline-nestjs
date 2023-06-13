import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Airplane } from 'src/entities/airplane.entity';
import { Flight } from 'src/entities/flight.entity';

@Injectable()
export class FlightService {

    constructor(@InjectRepository(Flight) private flightRepository: Repository<Flight>) {}

    async getAll(): Promise<Flight[]> {
        return await this.flightRepository.find();
    }

}
