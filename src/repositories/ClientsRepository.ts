import Product from "../models/Product";

export default class ProductRepository {
    //salvando os elementos como um Array
    products: Array<Product>;

    constructor() {
        this.products = []
    }

    public findByCode(code:number):Product | undefined {
        return this.products.find(v => v.code == code)
    }

    public findAll(): Array<Product> {
        return this.products
    }

   
    
}