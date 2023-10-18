import { Column, Entity, PrimaryColumn } from "typeorm";


@Entity('seat')
export class Seat {
    @PrimaryColumn({ name: 'seat_id' })
    seatId: number;

    @Column({ name: 'seat_column' })
    seatColumn: string;

    @Column({ name: 'seat_row' })
    seatRow: number;

    @Column({ name: 'seat_type_id' })
    seatTypeId: number;

    @Column({ name: 'airplane_id' })
    airplaneId: number;
}
