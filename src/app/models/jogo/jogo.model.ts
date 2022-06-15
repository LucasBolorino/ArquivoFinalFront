export class Jogo {
    id?: number;
    nome: string;
    descricao: string;
    urlJogo: string;
    nota: number;
    imagem: string;
    categoriaCodigo: string;
    usuarioCodigo: string;
    qtdDeAvaliacao: number;

    constructor(
        nome: string, 
        descricao: string,
        urlJogo: string,
        nota: number,
        imagem: string,
        categoriaCodigo: string,
        usuarioCodigo: string,
        qtdDeAvaliacao: number
        ) {
        this.nome = nome;
        this.descricao = descricao;
        this.urlJogo = urlJogo;
        this.nota = nota;
        this.imagem = imagem;
        this.categoriaCodigo = categoriaCodigo;
        this.usuarioCodigo = usuarioCodigo;
        this.qtdDeAvaliacao = qtdDeAvaliacao;
    }
}
