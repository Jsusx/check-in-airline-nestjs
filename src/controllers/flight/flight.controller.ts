import { BadRequestException, Controller, Get, Req } from '@nestjs/common';
import HTTPResponse from 'src/models/HTTPResponse.model';
import { FlightService } from 'src/services/flight/flight.service';

@Controller('flights')
export class FlightController {

    constructor(private flightService: FlightService) {}

    @Get()
    async listPassengers(@Req() request: Request) {
        let response = new HTTPResponse()

        try {
            response.data = await this.flightService.getAll()

        }catch(error) {
            response.code = 404
            response.errors = error

        }

        return response;
    }
}
