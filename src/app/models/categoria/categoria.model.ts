export class Categoria {
    id?: number;
    nome: string;
    qtdCategoriaAvaliada: number;

    constructor(
        nome: string, 
        qtdCategoriaAvaliada: number
        ) {
        this.nome = nome;
        this.qtdCategoriaAvaliada = qtdCategoriaAvaliada;
    }
}