import { Users } from '../user/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Movie extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column({ type: 'varchar' })
  public name: string;

  @Column({ type: 'varchar' })
  public title: string;

  @Column({ type: 'varchar' })
  public context: string;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt: Date;

  @Column({ type: 'varchar' })
  public photo: string;

  @Column({ type: 'varchar' })
  public runtime: string;

  @Column({ type: 'varchar' })
  public starring: string;

  @Column({ type: 'varchar' })
  public release: string;

  @Column({ type: 'varchar' })
  public content: string;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne((_type) => Users, (users) => users.article, { eager: false })
  user: Partial<Users>;
}
