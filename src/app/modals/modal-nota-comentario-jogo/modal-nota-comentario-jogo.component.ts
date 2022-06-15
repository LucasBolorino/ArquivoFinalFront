import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { AvaliacaoService } from 'src/app/services/avaliacao/avaliacao.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-modal-nota-comentario-jogo',
  templateUrl: './modal-nota-comentario-jogo.component.html',
  styleUrls: ['./modal-nota-comentario-jogo.component.css']
})
export class ModalNotaComentarioJogoComponent implements OnInit {

  @Input() jogo: any;
  usuario: any;
  avaliacao: any = {
    nota: 0
  };
  nota: any = 0;
  comentario: any = '';

  constructor(
    public activeModal: NgbActiveModal,
    private avaliacaoService: AvaliacaoService,
    private authService: AuthGuard,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {
    this.usuario = this.authService.getUsuario();
    this.buscarAvaliacaoPorJogo();
  }

  close(result?: any) {
    this.activeModal.close(result);
  }

  indexado() {
    return this.jogo.nota;
  }

  avaliacaoJogo(event: any) {
    this.nota = event;
    //console.log('this.nota', this.nota);    
  }

  buscarAvaliacaoPorJogo() {    
    this.avaliacaoService.buscarAvaliacaoPorJogo(+(this.authService.getUsuario().id), this.jogo.id).subscribe(
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

  salvar() {
    var payload = {
      jogoId: this.jogo.id,
      comentario: this.avaliacao.comentario
    }

    this.avaliacaoService.qtdDeAvaliacao(payload, this.usuario.id, this.nota).subscribe(
      (result) => {
        //console.log(result);          
        if (result) {
          this.jogo = result;
          this.usuarioService.inserirJogoAvaliado(+(this.usuario.id), result.id).subscribe(
            (result) => {
              this.activeModal.close()
            }, (error) => {
              console.log('error', error);
            }
          )
        }
        //this.buscarAvaliacaoPorJogo();
      }, (error) => {
        console.log(error);
      }
    )
  }
}
