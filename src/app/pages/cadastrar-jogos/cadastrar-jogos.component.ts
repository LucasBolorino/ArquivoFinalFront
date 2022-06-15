import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/core/auth/auth.guard';
import { ValidService } from 'src/app/core/valid/valid.service';
import { Categoria } from 'src/app/models/categoria/categoria.model';
import { Jogo } from 'src/app/models/jogo/jogo.model';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { JogoService } from 'src/app/services/jogo/jogo.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'criar-games',
  templateUrl: './cadastrar-jogos.component.html',
  styleUrls: ['./cadastrar-jogos.component.css']
})
export class CadastrarJogosComponent implements OnInit {

  jogo = {
    nome: '',
    descricao: '',
    urlJogo: '',
    nota: 0,
    imagem: ' ',
    qtdDeAvaliacao: 0
  }

  categoria: Categoria = {
    nome: '',
    qtdCategoriaAvaliada: 0
  }

  public selectedFile: any;
  cardImageBase64: string = '';

  constructor(
    private validService: ValidService,
    private jogoService: JogoService,
    private categoriaService: CategoriaService,
    private usuarioService: UsuarioService,
    private authService: AuthGuard,
  ) { }

  ngOnInit(): void {    
  }

  validaJogo() {
    return this.validService.validaCampos(this.jogo) && this.categoria.nome !== '' && this.selectedFile
  }

  cadastro() {
    this.triggerVerificarCategoria(this.categoria);
  }

  triggerVerificarCategoria(_categoria: any) {   
    var payload = {
      id: 0,
      nome: _categoria.nome
    } 
    this.categoriaService.buscarPorNome(payload).subscribe(
      (result) => {
        if (result === null) {
          this.triggerCadastroCategoria(this.categoria);          
        } else {
          var _jogo: Jogo = {
            nome: this.jogo.nome,
            descricao: this.jogo.descricao,
            urlJogo: this.jogo.urlJogo,
            nota: this.jogo.nota,
            imagem: '',
            categoriaCodigo: result.id.toString(),
            usuarioCodigo: this.authService.getUsuario().id.toString(),
            qtdDeAvaliacao: this.jogo.qtdDeAvaliacao,
          }   
          //console.log(_jogo);
          
          this.triggerCadastroJogo(_jogo);
        }
      }, (error) => {
        console.log(error);        
      }
    )    
  }

  triggerCadastroCategoria(_categoria: any) {
    this.categoriaService.cadastro(_categoria).subscribe(
      (result) => {      
        var _jogo: Jogo = {
          nome: this.jogo.nome,
          descricao: this.jogo.descricao,
          urlJogo: this.jogo.urlJogo,
          nota: this.jogo.nota,
          imagem: '',
          categoriaCodigo: result.id.toString(),
          usuarioCodigo: this.authService.getUsuario().id.toString(),
          qtdDeAvaliacao: this.jogo.qtdDeAvaliacao

        }   
        this.triggerCadastroJogo(_jogo);
        
      }, (error) => {
        alert('Erro ao salvar categoria.')
        console.log(error);        
      }
    )
  }

  triggerCadastroJogo(_jogo: any) { 
    this.jogoService.cadastro(_jogo).subscribe(
      (result) => {
        if (this.selectedFile) {
          this.onUpload(result)
        }
        alert("Salvo com sucesso.")
        this.triggerAtualizaUsuario(result.id);
        this.resetaObjetos();
      }, (error) => {
        alert('Erro ao salvar jogo.')
        console.log(error);
      }
    )
  }

  triggerAtualizaUsuario(idJogo: any) {
    //_usuario.jogos.push(idJogo);  
    console.log(this.authService.getUsuario());
    this.usuarioService.atualizarJogos(this.authService.getUsuario().id, idJogo).subscribe(
      (result)=> {
        console.log(result);        
      }, (error) => {
        alert('Erro ao adicionar jogo.')
        console.log(error);        
      }
    ) 
  }

  resetaObjetos() {
    this.jogo = {
      nome: '',
      descricao: '',
      urlJogo: '',
      nota: 0,
      imagem: ' ',
      qtdDeAvaliacao: 0
    }
    this.categoria = {
      nome: '',
      qtdCategoriaAvaliada: 0
    }
  }

  onFileChanged(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      /* const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (res) => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
        }
      };
      reader.readAsDataURL(fileInput.target.files[0]); */
      this.selectedFile = fileInput.target.files[0];
    } else {
      this.selectedFile = null
    }
  }

  onUpload(jogo: Jogo) {
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.nome);

    this.jogoService.salvarImagem(jogo, uploadData).subscribe(
      (result) => {
        console.log(result);        
      }, (error) => {
        console.log(error);        
      }
    )
  }
}
