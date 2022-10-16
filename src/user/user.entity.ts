import { Movie } from '../movies/movie.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Role } from 'src/roles/roles.entity';

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar', unique: true })
  public name: string;

  @Column({ type: 'varchar', unique: true })
  public email: string;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;

  @Column({ type: 'varchar' })
  public password: string;

  @Column({ type: 'varchar' })
  public gender: string;

  @Column({ type: 'varchar' })
  public age: string;

  @OneToMany((_type) => Movie, (movie) => movie.user, { eager: true })
  movie: Movie[];

  @JoinColumn({ name: 'rol_id' })
  @ManyToOne((_type) => Role, (role) => role.users, { eager: false })
  role: Partial<Role>;
}
