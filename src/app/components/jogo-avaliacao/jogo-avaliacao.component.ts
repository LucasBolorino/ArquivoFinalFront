import { Component, Input, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { AvaliacaoService } from 'src/app/services/avaliacao/avaliacao.service';
import { JogoService } from 'src/app/services/jogo/jogo.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'avaliacao-game',
  templateUrl: './jogo-avaliacao.component.html',
  styleUrls: ['./jogo-avaliacao.component.css']
})
export class JogoAvaliacaoComponent implements OnInit {

  @Input() jogoCodigo: any;
  @Input() usuarioCodigo: any;
  @Input() nota: any;
  @Input() relatorio: any;
  @Input() showComentario: any;

  jogo: any = {};
  imageUrl: string = '';
  usuario: any = {};
  marcado: boolean = false;
  avaliacao: any = {
    nota: 0
  };
  
  constructor(
    private jogoService: JogoService,
    private usuarioService: UsuarioService,
    private avaliacaoService: AvaliacaoService,
    private authService: AuthGuard,
    private utilService: UtilService
    ) { }

  ngOnInit(): void {
    this.buscarJogo(this.jogoCodigo);
    this.buscarUsuario(this.usuarioCodigo);
    this.verificaMarcacaoUtil();
    this.buscarAvaliacaoPorJogo();
  }

  buscarAvaliacaoPorJogo() {    
    this.avaliacaoService.buscarAvaliacaoPorJogo(this.usuarioCodigo, this.jogoCodigo).subscribe(
      (result) => {
        this.avaliacao = result ? result : {
          nota: 0,
          comentario: ''
        };
        this.nota = this.avaliacao.nota;       
      }, (error) => {
        console.log(error);
      }
    )
  }

  verificaMarcacaoUtil() {
    this.utilService.verificaMarcacao(+(this.jogoCodigo), +(this.usuarioCodigo)).subscribe(
      (result) => {        
        this.marcado = result;
      }, (error) => {
        console.log(error);
      }
    )
  }

  checkbox(event: any) {
    if (event.target.checked) {
      var payload = {
        usuarioCodigo: this.usuario.id,
        jogoCodigo: this.jogo.id
      }
      this.utilService.marcar(payload).subscribe(
        (result) => {          
        }, (error) => {
          console.log(error);
        }
      )
    } else {
      this.utilService.desmarcar(+(this.jogoCodigo), +(this.usuarioCodigo)).subscribe(
        (result) => {
        }, (error) => {
          console.log(error);
        }
      )
    }
  }

  indexado() {
    return this.jogo.nota
  }

  buscarJogo(id: any) {  
    this.jogoService.buscarPorId(+(id)).subscribe(
      (result) => {
        this.jogo = result; 
        this.convertBase64toImage(this.jogo.imagem);     
        if (!this.nota) {
          this.nota = this.jogo.nota
        } 
      }, (error) => {
        console.log(error);
      }
    )
  }

  buscarUsuario(id: any) {
    this.usuarioService.buscarPorId(+(id)).subscribe(
      (result) => {
        this.usuario = result;      
      },(error) => {
        console.log(error);        
      }
    )
  }

  convertBase64toImage(imagem: any) {
    this.imageUrl = 'data:image/png;base64,' + imagem;
  }
}