import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
    private router: Router, 
    public authService: AuthService ,
    private authGuard: AuthGuard
    ) { }

    ngOnInit(): void {
      this.usuario  = this.authGuard.getUsuario();  
    }

  logout() {
    this.router.navigate(['login']);
    localStorage.clear()
  }

}
