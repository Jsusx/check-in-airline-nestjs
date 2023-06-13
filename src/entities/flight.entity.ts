import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Flight {

    @PrimaryGeneratedColumn({ name: "flight_id" })
    flightId: number;

    @Column({ name: "takeoff_date_time" })
    takeoffDateTime: number;

    @Column({ name: "takeoff_airport" })
    takeoffAirport: string;

    @Column({ name: "landing_date_time" })
    landingDateTime: number;

    @Column({ name: "landing_airport" })
    landingAirport: string;

    @Column({ name: "airplane_id" })
    airplaneId: number

}
