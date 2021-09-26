import Product from "../models/Product";

export default class ProductRepository {
    //salvando os elementos como um Array
    products: Array<Product>;

    constructor() {
        this.products = []
    }

    public findByCode(code: number): Product | undefined {
        let dados = this.products.find(v => v.code == code)
        //console.log({dados})
        return dados
    }

    public findAll(): Array<Product> {
        return this.products
    }

    public checkIndex(code:number):number{
        let indice = this.products.map(value => {
            return value.code
        }).indexOf(code)

       return indice
    }

    public deleteByCode(code: number): Array<Product> {

        let indice = this.products.map(value => {
            return value.code
        }).indexOf(code)
        if(indice == -1){
        }

        this.products.splice(indice, 1)

        console.log(this.products)

        return this.products
    }

   

}