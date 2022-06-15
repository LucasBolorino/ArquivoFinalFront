import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/app/core/date/date.service';
import { ValidService } from 'src/app/core/valid/valid.service';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'criar-profile',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

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
  }
  cadastrando: boolean = true;
  isAdmin = false;

  constructor(
    private dateService: DateService,
    private usuarioService: UsuarioService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private validService: ValidService) { }

  ngOnInit(): void {
  }

  cadastro() {
    this.cadastrando = false;
    this.usuario.ehAdmin = this.isAdmin.toString()
    this.usuario.dataNascimento = this.usuario.dataNascimento
    var payload = this.usuario;

    this.usuarioService.cadastro(payload).subscribe(
      (result) => {
        console.log(result);
        if (result) {
          this.router.navigate(['login']);
          this.cadastrando = true;
        } else {
          alert('Email já em uso.');
          this.cadastrando = true;
        }
      }
    ) 
  }  

  validaUsuario() {
    return (this.validService.validaCampos(this.usuario) && this.validService.validaEmail(this.usuario.email) ) 
      && this.cadastrando
  }

}
