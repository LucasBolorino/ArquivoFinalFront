import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  formatarDataComBarra(data: any): any{
    var aux = data.split('-');
    return `${aux[2]}/${aux[1]}/${aux[0]}`
  }
}
