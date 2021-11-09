//import { v4 as uuidv4 } from 'uuid';
import { Entity, Column } from "typeorm";
import { IsString } from "class-validator";
import ClientProduct from "./ClientProduct";

@Entity()
export default class Client extends ClientProduct {
  @Column({ nullable: true })
  @IsString()
  cpf: string;
}
