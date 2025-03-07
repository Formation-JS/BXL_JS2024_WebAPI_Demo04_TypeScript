import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import Animal from './animal.model.ts';

@Entity()
export default class BiologicalClass {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column('character varying', { length: 50 })
    name: string;

    @OneToMany(() => Animal, (animal) => animal.bioClass)
    animals: Animal[]
}