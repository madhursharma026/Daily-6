import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TaskDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    task1: String;

    @Column()
    task2: String;

    @Column()
    task3: String;

    @Column()
    task4: String;

    @Column()
    task5: String;

    @Column()
    task6: String;

    @Column({nullable: false, type: 'date', default: () => 'NOW()'})
    completedAt: Date;
}

