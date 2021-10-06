import { EntityRepository, Repository } from "typeorm";
import ClientHasProduct from "../models/ClientHasProduct"

@EntityRepository(ClientHasProduct) 
class ClientHasProductRepository extends Repository<ClientHasProduct> {

}
export{ClientHasProductRepository}