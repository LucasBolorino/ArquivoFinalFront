import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlServer = "https://good-browser-games-lucas.herokuapp.com/goodbrowsergames/usuario/";

  constructor(private http: HttpClient) { }

  login(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.urlServer}login`, usuario);
  }

  cadastro(usuario: any): Observable<any> {
    return this.http.post<any>(`${this.urlServer}cadastro`, usuario);
  }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlServer}listar`);
  }

  listarExceto(email: any): Observable<any[]> {
    return this.http.get<any>(`${this.urlServer}listarExceto/${email}`)
  }

  buscarPorId(id: any): Observable<any> {
    return this.http.get<any>(`${this.urlServer}buscarPorId/${id}`)
  }

  emailPessoa(email: any): Observable<any> {
    return this.http.get<any>(`${this.urlServer}emailpessoa/${email}`)
  }

  atualizar(usuario: any): Observable<any> {
    return this.http.put<any>(`${this.urlServer}atualizar`, usuario)
  }

  deletar(id: any): Observable<any> {
    return this.http.delete<any>(`${this.urlServer}deletar/${id}`)
  }

  atualizarJogos(idUsuario: any, idJogo: any): Observable<any> {
    return this.http.get<any>(`${this.urlServer}atualizarJogos/${idUsuario}/${idJogo}`)
  }
  
  inserirJogoAvaliado(idUsuario: number, idJogo: number) {
    return this.http.get<any>(`${this.urlServer}inserirJogoAvaliado/${idUsuario}/${idJogo}`);
  }
}
