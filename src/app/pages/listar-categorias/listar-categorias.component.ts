import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { EditarCategoriaComponent } from 'src/app/modals/editar-categoria/editar-categoria.component';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';

@Component({
  selector: 'lista-de-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent implements OnInit {

  listaCategorias: any[] = [];
  usuario: any;

  constructor(private categoriaService: CategoriaService,
    private modalService: NgbModal, private authService: AuthGuard) { }

  ngOnInit(): void {
    this.getListaCategorias();
    this.usuario = this.authService.getUsuario();
  }

  getListaCategorias() {
    this.categoriaService.listar().subscribe(
      (result) => {
        this.listaCategorias = result;
      }, (error) => {
        console.log(error);
      }
    )
  }

  openModal(item: any) {
    if (this.usuario.ehAdmin === 'true') {
      const modalRef = this.modalService.open(EditarCategoriaComponent, {
        backdrop: "static",
        keyboard: true,
        scrollable: false,
        size: "sm",
      });

      modalRef.componentInstance.categoria = item;

      modalRef.result.then((result) => {
        if (result) {
          //console.log('openModalEditar', result);
          this.getListaCategorias();
        }
      });
    }
  }
}
