import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { DateService } from 'src/app/core/date/date.service';
import { ValidService } from 'src/app/core/valid/valid.service';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'editar-profile',
  templateUrl: './atualizar-perfil.component.html',
  styleUrls: ['./atualizar-perfil.component.css']
})
export class AtualizarPerfilComponent implements OnInit {

  usuario: Usuario = {
    nome: '',
    userName: '',
    senha: '',
    dataNascimento: '',
    estado: '',
    pais: '',
    email: '',
    ehAdmin: '',
    qtdJogosAvaliados: 0
  };

  constructor(
    private authGuard: AuthGuard,
    private dateService: DateService,
    private usuarioService: UsuarioService,
    private router: Router,
    private validService: ValidService
  ) { }

  ngOnInit(): void {
    this.usuario = this.authGuard.getUsuario();        
  }

  atualizar() {  
    var payload = {
      id: this.usuario.id,
      nome: this.usuario.nome,
      userName: this.usuario.userName,
      senha: this.usuario.senha,
      dataNascimento: this.usuario.dataNascimento,
      estado: this.usuario.estado,
      pais: this.usuario.pais,
      email: this.usuario.email,
      ehAdmin: this.usuario.ehAdmin === null ? 'false' : this.usuario.ehAdmin,
      jogos: this.usuario.jogos,      
      qtdJogosAvaliados: this.usuario.qtdJogosAvaliados  === 0 ? this.usuario.jogosAvaliados?.length : this.usuario.qtdJogosAvaliados,
    }  

    //console.log(payload);    

    this.usuarioService.atualizar(payload).subscribe(
      (result) => {
        if (result) {
          localStorage.setItem('usuario', JSON.stringify(result))
          //this._usuario = result;  
          alert('Salvo com sucesso.')
        }
      }, (error) => {
        console.log(error);        
      }
    )
    
  }

  validaUsuario() {
    return (this.validService.validaCampos(this.usuario));    
  }
}
