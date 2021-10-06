//import { v4 as uuidv4 } from 'uuid';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column, ManyToOne, JoinColumn,
    CreateDateColumn,
    UpdateDateColumn
}
    from 'typeorm';
import Client from './Client';
import Product from './Product';


@Entity()
export default class ClientHasProduct {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Client, { nullable: true, eager: true, cascade: true })
    @JoinColumn()
    clientId: Client;

    @ManyToOne(() => Product, { nullable: true, eager: true, cascade: true })
    @JoinColumn()
    productId: Product;

    @Column()
    value: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}