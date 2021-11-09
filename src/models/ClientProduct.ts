//import { v4 as uuidv4 } from 'uuid';
import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";
import { IsEmail, IsString, IsDate } from "class-validator";

export default abstract class ClientProduct {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  phone: string;

  @Column()
  @IsEmail()
  mail: string;

  @Column()
  @IsString()
  address: string;

  @Column()
  @IsDate()
  birthday: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
