import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo/jogo.service';

@Component({
  selector: 'games-melhores-avaliados',
  templateUrl: './jogos-mais-avaliados.component.html',
  styleUrls: ['./jogos-mais-avaliados.component.css']
})
export class JogosMaisAvaliadosComponent implements OnInit {

  listaJogos: any = []

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {
    this.getListaJogos();
  }

  getListaJogos() {
    this.jogoService.buscarQtdAvaliacao().subscribe(
      (result) => {        
        this.listaJogos = result.length > 5 ? result.slice(0,5) : result ;
        //console.log(this.listaJogos);        
      }, (error) => {
        console.log(error);        
      }
    )
  }

  verificaLista(){
    return this.listaJogos.length > 0
  }
}