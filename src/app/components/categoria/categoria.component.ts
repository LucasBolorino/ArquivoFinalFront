import { Component, Input, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/core/auth/auth.guard';

@Component({
  selector: 'categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  @Input() categoria: any;
  usuario: any;

  constructor(private authService: AuthGuard) { }

  ngOnInit(): void {   
    this.usuario = this.authService.getUsuario(); 
  }

}
