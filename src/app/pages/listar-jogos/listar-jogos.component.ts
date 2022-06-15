import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo/jogo.service';

@Component({
  selector: 'lista-de-games',
  templateUrl: './listar-jogos.component.html',
  styleUrls: ['./listar-jogos.component.css']
})
export class ListarJogosComponent implements OnInit {

  listaJogos: any = []
  categoria: any;
  usuario: any;
  search: any = '';

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {
    this.getListaJogos();
  }

  verificaLista() {
    return this.listaJogos.length > 0;
  }

  getListaJogos() {
    this.jogoService.listar().subscribe(
      (result) => {        
        this.listaJogos = result;
      }, (error) => {
        console.log(error);        
      }
    )
  }

  pesquisar() {
    var payload = {
      id: 0,
      nome: this.search,
      descricao: '',
      urlJogo: '',
      nota: 0,
      imagem: '',
      categoriaCodigo: '',
      usuarioCodigo: '',
      qtdDeAvaliacao: 0,
    }
    
    this.jogoService.buscarJogo(payload).subscribe(
      (result)=> {
        console.log(result);
        this.listaJogos = result;        
      }, (error)=> {
        console.log(error);        
      }
    )
  }

}
