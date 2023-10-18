import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import HTTPResponse from 'src/models/HTTPResponse.model';
import { FlightService } from 'src/services/flight/flight.service';

@Controller('flights')
export class FlightController {

    constructor(private flightService: FlightService) {}

    @Get(":id/passengers")
    async listPassengers(@Param('id') id: number) {
        let response = new HTTPResponse()

        try {

            const flight = await this.flightService.findById(id);
            const passengers = await this.flightService.findPassengersByFlightId(id);
            const emptySeats = passengers.filter(a => a.seatId == null);
            const occupiedSeats = passengers.filter(a => a.seatId != null);
            let seats = await this.flightService.findSeatsByAirplaneId(flight.airplaneId);

            seats.forEach((seat, i) => {
                let q = occupiedSeats.find(st => st.seatId == seat.seatId)
                if(q) {
                    seats.splice(i, i+1)
                }
            })

            console.log(seats.length, emptySeats.length)




            response.data = flight


        }catch(error) {
            response.code = 404
            response.errors = error
        }

        return response;
    }
}
