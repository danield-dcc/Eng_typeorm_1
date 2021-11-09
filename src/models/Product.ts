//import { v4 as uuidv4 } from 'uuid';
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsNumber, IsString } from "class-validator";

@Entity()
export default class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @IsNumber()
  code: number;

  @Column()
  @IsString()
  description: string;

  @Column("float")
  @IsNumber()
  byPrice: number;

  @Column("float")
  @IsNumber()
  sellPrice: number;

  @Column("simple-array")
  @IsString()
  tag: string[];

  @Column({ default: 0, nullable: true })
  @IsNumber()
  lovers: number;
}
