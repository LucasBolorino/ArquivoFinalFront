import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo/jogo.service';

@Component({
  selector: 'categorias-mais-avaliadas',
  templateUrl: './categorias-mais-avaliadas.component.html',
  styleUrls: ['./categorias-mais-avaliadas.component.css']
})
export class CategoriasMaisAvaliadasComponent implements OnInit {

  lista: any = []
  primeiro: any;
  segundo: any;
  terceiro: any;

  constructor(private jogoService: JogoService) { }

  ngOnInit(): void {
    this.getLista();
  }

  getLista() {
    this.jogoService.buscarPorMelhoresCategorias().subscribe(
      (result) => {
        this.lista = result.length > 3 ? result.slice(0,3) : result;  

        for (let i = 0; i < this.lista.length; i++) {
          const element = this.lista[i];
          if (i === 0) {
            this.primeiro = element;
          } else if (i === 1) {
            this.segundo = element;            
          } else if (i === 2) {
            this.terceiro = element;
          }
        }
      }, (error) => {
        console.log(error);        
      }
    )
  }

}
