import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Airplane {
    @PrimaryGeneratedColumn()
    airplane_id: string;

    @Column()
    name: string;
}
