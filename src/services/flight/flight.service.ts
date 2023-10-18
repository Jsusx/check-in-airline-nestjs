import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Flight } from 'src/entities/flight.entity';
import { BoardingPassMap } from 'src/entities/boardingPassMap.entity';
import { Seat } from 'src/entities/seat.entity';

@Injectable()
export class FlightService {

    constructor(@InjectRepository(Flight) private flightRepository: Repository<Flight>,
                @InjectRepository(BoardingPassMap) private boardingMapRepository: Repository<BoardingPassMap>,
                @InjectRepository(Seat) private seatRepository: Repository<Seat>,
                private datasource: DataSource) {}


    async findById(id): Promise<Flight> {
        return await this.flightRepository.findOneBy({ flightId: id })
    }

    async findPassengersByFlightId(id): Promise<BoardingPassMap[]> {

        /* Old query
        return await this.flightMapRepository.query(`select passenger.passenger_id, passenger.dni, passenger.name, passenger.age, passenger.country,
                                            boarding_pass.boarding_pass_id, boarding_pass.purchase_id, boarding_pass.seat_type_id, boarding_pass.seat_id
                                            from airline.boarding_pass inne(r join passenger on boarding_pass.passenger_id = passenger.passenger_id
                                            where flight_id = ${id} order by boarding_pass.seat_id asc;`)
        */


        let query = this.datasource.createQueryBuilder('boarding_pass', 'bp')
                                        .select('p.passenger_id', 'passengerId')
                                        .addSelect('p.dni', 'dni')
                                        .addSelect('p.name', 'name')
                                        .addSelect('p.age', 'age')
                                        .addSelect('p.country', 'country')
                                        .addSelect('bp.boarding_pass_id', 'boardingPassId')
                                        .addSelect('bp.purchase_id', 'purchaseId')
                                        .addSelect('bp.seat_type_id', 'seatTypeId')
                                        .addSelect('bp.seat_id', 'seatId')
                                        .innerJoin('passenger', 'p', 'bp.passenger_id = p.passenger_id')
                                        .where('bp.flight_id = ' + id)
                                        //.andWhere(!nulls ? 'bp.seat_id IS NOT NULL':'bp.seat_id IS NULL')
                                        .orderBy('bp.seat_id', 'ASC');

        return query.execute();
    }

    async findSeatsByAirplaneId(id): Promise<Seat[]> {
        return this.seatRepository.findBy({ airplaneId: id });
    }

}
