import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Jogo } from 'src/app/models/jogo/jogo.model';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  urlServer = "https://good-browser-games-lucas.herokuapp.com/goodbrowsergames/jogo/";

  constructor(private http: HttpClient) { }

  cadastro(jogo: Jogo): Observable<any> {
    return this.http.post<any>(`${this.urlServer}cadastro`, jogo);
  }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlServer}listar`);
  } 

  salvarImagem(jogo: Jogo, imagem: any): Observable<any> {
    return this.http.post<any>(`${this.urlServer}salvarImagem/${jogo.id}`, imagem);
  }

  buscarJogo(jogo: Jogo): Observable<any> {
    return this.http.post<any[]>(`${this.urlServer}buscarJogo/`, jogo);
  }

  editarJogo(jogo: Jogo): Observable<any> {
    return this.http.put<any>(`${this.urlServer}editarJogo/`, jogo);
  }

  buscarPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlServer}buscarPorId/${id}`);
  }

  deletarJogo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlServer}deletarJogo/${id}`);
  }

  obtertAutorAvaliacaoJogo(jogo: Jogo): Observable<any> {
    return this.http.post<any[]>(`${this.urlServer}obterAutorAvaliacaoJogo`, jogo);
  }

  listaRecomendados(idUsuario: number): Observable<any> {
    return this.http.get<any>(`${this.urlServer}listaRecomendados/${idUsuario}`);
  }
  
  buscarPorPioresNotas(): Observable<any[]>  {
    return this.http.get<any[]>(`${this.urlServer}buscarPorPioresNotas`);
  }

  buscarPorMelhoresNotas(): Observable<any[]>  {
    return this.http.get<any[]>(`${this.urlServer}buscarPorMelhoresNotas`);
  }

  buscarPorMelhoresCategorias(): Observable<any[]>  {
    return this.http.get<any[]>(`${this.urlServer}buscarPorMelhoresCategorias`);
  }

  buscarMembrosMaiorNumeroAvaliacao() : Observable<any[]> {
    return this.http.get<any[]>(`${this.urlServer}buscarMembrosMaiorNumeroAvaliacao`);
  }

  buscarQtdAvaliacao() : Observable<any[]> {    
    return this.http.get<any[]>(`${this.urlServer}buscarQtdAvaliacao`);
  }
}
