import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogo } from 'src/app/models/jogo/jogo.model';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {
  urlServer = "https://good-browser-games-lucas.herokuapp.com/goodbrowsergames/avaliacao/";

  constructor(private http: HttpClient) { }
  
  qtdDeAvaliacao(payload: any, idUsuario: any, nota: any): Observable<any> {
    return this.http.post<any>(`${this.urlServer}qtdDeAvaliacao/${idUsuario}/${nota}`, payload);
  }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlServer}listar`);
  }

  listarPorIdJogo(idJogo: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlServer}listarPorIdJogo/${idJogo}`);
  }

  buscarAvaliacaoPorJogo(idUsuario: any, idJogo: any) : Observable<any>{
    return this.http.get<any>(`${this.urlServer}buscarAvaliacaoPorJogo/${idUsuario}/${idJogo}`);
  }
}
