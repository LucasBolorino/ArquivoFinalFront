import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo/jogo.service';

@Component({
  selector: 'melhores-avaliacoes',
  templateUrl: './relatorio-melhor-avaliacao.component.html',
  styleUrls: ['./relatorio-melhor-avaliacao.component.css']
})
export class RelatorioMelhorAvaliacaoComponent implements OnInit {
  listaJogos: any = []

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {
    this.getListaJogos();
  }

  getListaJogos() {
    this.jogoService.buscarPorMelhoresNotas().subscribe(
      (result) => {           
          this.listaJogos = result.length > 5 ? result.slice(0,5) : result;  
      }, (error) => {
        console.log(error);        
      }
    )
  }

  verificaLista() {
    return this.listaJogos.length > 0;
  }
}
