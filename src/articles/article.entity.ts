import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity()
export class Articles {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({ type: "varchar" })
    public name: string;

    @CreateDateColumn({ type: "timestamp" })
    public createdAt!: Date;

    @UpdateDateColumn({ type: "timestamp" })
    public updatedAt!: Date;

    @DeleteDateColumn({ type: "timestamp" })
    public deleteAdt!: Date;
}
