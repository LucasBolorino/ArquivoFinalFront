import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'relatorios',
  templateUrl: './ver-relatorios.component.html',
  styleUrls: ['./ver-relatorios.component.css']
})
export class VerRelatoriosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  active(id: any) {
    var jogosmelhoresmedias = document.getElementById('jogos-melhores-medias');
    var jogosmaisavaliados = document.getElementById('jogos-mais-avaliados');
    var categoria = document.getElementById('categoria');
    var membros = document.getElementById('membros');
    //var aux: any[] = element?.className.split(" ")
    switch (id) {
      case 'jogos-melhores-medias':
        jogosmelhoresmedias?.classList.add('btn-danger');
        jogosmelhoresmedias?.classList.remove("btn-light");

        jogosmaisavaliados?.classList.remove('btn-danger');
        categoria?.classList.remove('btn-danger');
        membros?.classList.remove('btn-danger');
        break;
      case 'jogos-mais-avaliados':
        jogosmelhoresmedias?.classList.remove('btn-danger');

        jogosmaisavaliados?.classList.add('btn-danger');
        jogosmaisavaliados?.classList.remove("btn-light");

        categoria?.classList.remove('btn-danger');
        membros?.classList.remove('btn-danger');
        break;
      case 'categoria':
        jogosmelhoresmedias?.classList.remove('btn-danger');
        jogosmaisavaliados?.classList.remove('btn-danger');

        categoria?.classList.add('btn-danger');
        categoria?.classList.remove("btn-light");

        membros?.classList.remove('btn-danger');
        break;
      case 'membros':
        jogosmelhoresmedias?.classList.remove('btn-danger');
        jogosmaisavaliados?.classList.remove('btn-danger');
        categoria?.classList.remove('btn-danger');

        membros?.classList.add('btn-danger');
        membros?.classList.remove("btn-light");
        break;
      default:
        break;
    }
    /* if (aux.indexOf("btn-light") > -1 &&
      aux.indexOf("text-danger") > -1) {
      element.classList.remove("btn-danger");
      element.classList.remove("btn-light");
      element.classList.remove("text-danger");
    } else {
      element.classList.add("btn-danger");
    } */
  }

}
