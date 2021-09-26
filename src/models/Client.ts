import { v4 as uuidv4 } from 'uuid';

export default class Client {
    id: string;
    code:number;
    nome:string;
    endereco:string;
    genero:string;
    idade: number;
    telefone: number;

    constructor({code,endereco,genero,idade,nome,telefone}: Omit<Client, 'id'>){
        this.id = uuidv4();
        this.code = code;
        this.nome = nome;
        this.endereco = endereco;
        this.genero = genero;
        this.idade = idade;
        this.telefone = telefone;
    }
}


