import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidService {

  constructor() { }

  validaCampos(object: any): boolean {
    var aux = true;
    for (const key in object) {
      if (
        (key !== 'qtdJogosAvaliados' && object[key] === null) ||
        object[key] === '' ||
        object[key] === undefined) {
        aux = false;
      }
    }
    return aux;
  }

  validaEmail(email: any) {
    if (email !== '') {
      const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regularExpression.test(String(email).toLowerCase());
    } else {
      return false;
    }
  }
}
