import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  urlServer = "https://good-browser-games-lucas.herokuapp.com/goodbrowsergames/util/";

  constructor(private http: HttpClient) { }

  marcar(util: any) :Observable<any>{
    return this.http.post<any>(`${this.urlServer}marcar`, util);
  }

  desmarcar(idJogo: any, idUsuario: any){
    return this.http.delete<any>(`${this.urlServer}desmarcar/${idJogo}/${idUsuario}`);
  }

  listar() {
    return this.http.get<any[]>(`${this.urlServer}listar`);
  }

  verificaMarcacao(idJogo: any, idUsuario: any) {
    return this.http.get<any>(`${this.urlServer}verificaMarcacao/${idJogo}/${idUsuario}`);
  }

}
