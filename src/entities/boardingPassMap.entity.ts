import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'boarding_pass' })
export class BoardingPassMap {
    @Column({ name: 'passenger_id' })
    passengerId: number;

    @Column({ name: 'dni' })
    dni: number;

    @Column({ name: 'name' })
    name: string;

    @Column({ name: 'age' })
    age: number;

    @Column({ name: 'country' })
    country: string;

    @PrimaryColumn({ name: 'boarding_pass_id' })
    boardingPassId: number;

    @Column({ name: 'seat_type_id' })
    seatTypeId: number;

    @Column({ name: 'seat_id' })
    seatId: number;

}
