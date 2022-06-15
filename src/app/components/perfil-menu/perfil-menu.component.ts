import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { Usuario } from 'src/app/models/usuario/usuario.model';

@Component({
  selector: 'menu-profile',
  templateUrl: './perfil-menu.component.html',
  styleUrls: ['./perfil-menu.component.css']
})
export class PerfilMenuComponent implements OnInit {

  usuario: Usuario = {
    nome: '',
    userName: '',
    senha: '',
    dataNascimento: '',
    estado: '',
    pais: '',
    email: '',
    ehAdmin: 'false',
    qtdJogosAvaliados: 0
  };

  constructor(
    private authGuard: AuthGuard,
    ) { }

  ngOnInit(): void {
    this.usuario  = this.authGuard.getUsuario();  
  }

}
