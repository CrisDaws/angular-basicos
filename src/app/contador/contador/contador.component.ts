import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1> {{title}} </h1>

    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)="acumular( -base)"> - {{base}} </button>
    <span> {{numero}} </span>
    <button (click)="acumular(base)"> + {{base}} </button>
    `
})

export class ContadorComponent{
  title: string = 'Contador App';
  numero: number = 0;
  base: number = 5;
 
  // suma() {
  //   this.numero = this.numero + 1
  // }
  // restar() {
  //   this.numero = this.numero - 1
  // }

  acumular( valor:number ) {
    this.numero = this.numero + valor
  }
}