export class Usuario {
    id?: number;
    nome: string;
    userName: string;
    senha: string;
    dataNascimento: string;
    estado: string;
    pais: string;
    email: string;
    ehAdmin: string;
    jogosAvaliados?: any[];
    qtdJogosAvaliados: number;

    jogos?: any[];

    constructor(
        nome: string, 
        userName: string, 
        senha: string, 
        dataNascimento: string,
        estado: string,
        pais: string,
        email: string,
        ehAdmin: string,
        qtdJogosAvaliados: number,
        ) {
        this.nome = nome;
        this.userName = userName;
        this.senha = senha;
        this.dataNascimento = dataNascimento;
        this.estado = estado;
        this.pais = pais;
        this.email = email;
        this.ehAdmin = ehAdmin;
        this.qtdJogosAvaliados = qtdJogosAvaliados;
    }
}
