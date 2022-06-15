import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { EditarJogoComponent } from 'src/app/modals/editar-jogo/editar-jogo.component';
import { ModalNotaComentarioJogoComponent } from 'src/app/modals/modal-nota-comentario-jogo/modal-nota-comentario-jogo.component';
import { AvaliacaoService } from 'src/app/services/avaliacao/avaliacao.service';
import { JogoService } from 'src/app/services/jogo/jogo.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { UtilService } from 'src/app/services/util/util.service';

@Component({
  selector: 'game',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {
  @Input() jogo: any;
  @Input() relatorio: any;
  @Output() deleteRequest = new EventEmitter<string>();
  userName: any = '';
  imageUrl: string = '';
  usuario: any;
  marcado: boolean = false;
  avaliacao: any = {
    nota: 0
  };
  nota: any = 0;

  constructor(
    private modalService: NgbModal,
    private jogoService: JogoService,
    private avaliacaoService: AvaliacaoService,
    private authService: AuthGuard,
    private usuarioService: UsuarioService,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.convertBase64toImage();
    this.usuario = this.authService.getUsuario();
    this.getUsuarioAvaliacaoJogo(this.jogo);
    this.verificaMarcacaoUtil();
    this.buscarAvaliacaoPorJogo();
  }

  getJogo(id: any) {
    this.jogoService.buscarPorId(id).subscribe(
      (result) => {
        console.log(result);   
        this.jogo = result;     
      }, (error) => {
        console.log(error);        
      }
    )
  }

  indexado() {
    return this.jogo.nota;
  }

  openAvaliacao(jogo: any) {
    const modalRef = this.modalService.open(ModalNotaComentarioJogoComponent, {
      backdrop: "static",
      keyboard: true,
      scrollable: false,
      size: "lg",
    })

    modalRef.componentInstance.jogo = jogo;

    modalRef.result.then((result) => {
      this.getJogo(this.jogo.id);
    })
  }

  getUsuarioAvaliacaoJogo(jogo: any) {
    this.jogoService.obtertAutorAvaliacaoJogo(jogo).subscribe(
      (result) => {
        //console.log(result);  
        this.userName = result.userName;
      }, (error) => {
        console.log(error);
      }
    )
  }

  convertBase64toImage() {
    this.imageUrl = 'data:image/png;base64,' + this.jogo.imagem;
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

  openModalEditar(item: any) {
    const modalRef = this.modalService.open(EditarJogoComponent, {
      backdrop: "static",
      keyboard: true,
      scrollable: false,
      size: "xl",
    });

    modalRef.componentInstance.jogo = item;

    modalRef.result.then((result) => {
      if (result) {
        //console.log('openModalEditar', result);       
        this.jogoService.buscarPorId(result.id).subscribe(
          (result) => {
            //console.log(result);
            this.jogo = result;
            this.convertBase64toImage();
            this.usuario = this.authService.getUsuario();
          }, (error) => {
            console.log(error);
          }
        )
      }
    });
  }

  buscarJogoPorId(id: number) {
    this.jogoService.buscarPorId(id).subscribe(
      (result) => {
        //console.log('buscarJogoPorId', result);
      }, (error) => {
        console.log(error);
      }
    )
  }

  deletarJogo(item: any) {
    this.jogoService.deletarJogo(item.id).subscribe(
      (result) => {
        console.log(result);
        if (result) {
          alert('Removido com sucesso.')
          this.deleteRequest.emit();
        } else {
          alert('Erro ao remover o jogo.')
        }
      }, (error) => {
        alert('Erro ao remover o jogo.')
        console.log(error);
      }
    )
  }

  verificaMarcacaoUtil() {
    this.utilService.verificaMarcacao(this.jogo.id, this.usuario.id).subscribe(
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
      this.utilService.desmarcar(this.jogo.id, this.usuario.id).subscribe(
        (result) => {
        }, (error) => {
          console.log(error);
        }
      )
    }
  }

}
