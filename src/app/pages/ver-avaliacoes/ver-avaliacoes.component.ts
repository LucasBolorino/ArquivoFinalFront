import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvaliacaoService } from 'src/app/services/avaliacao/avaliacao.service';
import { JogoService } from 'src/app/services/jogo/jogo.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'avaliacoes',
  templateUrl: './ver-avaliacoes.component.html',
  styleUrls: ['./ver-avaliacoes.component.css']
})
export class VerAvaliacoesComponent implements OnInit {
  listaAvaliacao: any = [];

  payload = {
    nota: 0,
    jogo: {},
    usuario: {}
  }

  nome: string = '';

  constructor(
    private router: ActivatedRoute,
    private jogoService: JogoService,
    private avaliacaoService: AvaliacaoService,
  ) { }

  ngAfterContentInit() {
    this.listarPorIdJogo();
  }

  verificaLista() {
    return this.listaAvaliacao.length > 0;
  }

  ngOnInit(): void {
  }

  listarPorIdJogo() {
    var id: any = this.router.snapshot.paramMap.get('id');
    this.avaliacaoService.listarPorIdJogo(id).subscribe(
      (result) => {  
        this.listaAvaliacao = result;  
        //console.log(this.listaAvaliacao[0]);
        if (this.listaAvaliacao.length > 0) {
          this.buscarJogoPorId(this.listaAvaliacao[0].jogoCodigo)          
        }
      }, (error) => {
        console.log(error);        
      }
    )
  }

  buscarJogoPorId(id: any) {
    this.jogoService.buscarPorId(id).subscribe(
      (result) => {
        console.log(result);        
        this.nome = result.nome
      }, (error) => {
        console.log(error);        
      }
    )
  }
}