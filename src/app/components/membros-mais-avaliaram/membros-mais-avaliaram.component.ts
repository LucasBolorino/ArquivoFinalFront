import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo/jogo.service';

@Component({
  selector: 'membros-ranking',
  templateUrl: './membros-mais-avaliaram.component.html',
  styleUrls: ['./membros-mais-avaliaram.component.css']
})
export class MembrosMaisAvaliaramComponent implements OnInit {
  lista: any[] = []

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {
    this.getLista();
  }

  getLista() {
    this.jogoService.buscarMembrosMaiorNumeroAvaliacao().subscribe(
      (result) => {
        this.lista = result.length > 5 ? result.slice(0,5) : result; 
        this.lista.push(this.lista[1])
      }, (error) => {
        console.log(error);        
      }
    )
  }

  verificaLista() {
    return this.lista.length > 0;
  }

}
