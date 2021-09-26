//import { v4 as uuidv4 } from 'uuid';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Product {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    code: number;

    @Column()
    description: string;

    @Column('float')
    byPrice: number;

    @Column('float')
    sellPrice: number;

    @Column("simple-array")
    tag: Array<Product>;

    @Column()
    lovers: number;

}