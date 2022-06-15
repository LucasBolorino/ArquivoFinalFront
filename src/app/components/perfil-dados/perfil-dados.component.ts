import { Component, Input, OnInit, Output } from '@angular/core';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { DateService } from 'src/app/core/date/date.service';
import { Usuario } from 'src/app/models/usuario/usuario.model';

@Component({
  selector: 'info-profile',
  templateUrl: './perfil-dados.component.html',
  styleUrls: ['./perfil-dados.component.css']
})
export class PerfilDadosComponent implements OnInit {

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
    private dateService: DateService,
    ) { }

  ngOnInit(): void {
    this.usuario  = this.authGuard.getUsuario();  
    this.usuario.dataNascimento = this.dateService.formatarDataComBarra(this.usuario.dataNascimento)
  }

}
