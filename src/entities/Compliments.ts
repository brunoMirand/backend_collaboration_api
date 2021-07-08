import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Tags } from '../entities/Tags';
import { Users } from '../entities/Users';
import { v4 as uuid } from 'uuid';

@Entity('compliments')
export class Compliments {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_sender: string;

  @JoinColumn({ name: 'user_sender' })
  @ManyToOne(() => Users)
  userSender: Users;

  @Column()
  user_receiver: string;

  @JoinColumn({ name: 'user_receiver' })
  @ManyToOne(() => Users)
  userReceiver: Users;

  @Column()
  tag_id: string;

  @JoinColumn({ name: 'tag_id' })
  @ManyToOne(() => Tags)
  tag: Tags;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
