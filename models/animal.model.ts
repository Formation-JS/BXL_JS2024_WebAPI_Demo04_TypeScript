import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import BiologicalClass from './biological-class.model.ts';

@Entity()
export default class Animal {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('character varying', { length: 50 })
    name: string;

    @Column('character varying', { length: 50 })
    feeding: string;

    @Column('character varying', { length: 50 })
    specie: string | undefined;

    @ManyToOne(() => BiologicalClass, (bc) => bc.animals)
    @JoinColumn()
    bioClass: BiologicalClass;
}