import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-ajustes',
  templateUrl: './lista-ajustes.component.html',
  styleUrls: ['./lista-ajustes.component.scss'],
})
export class ListaAjustesComponent  implements OnInit {
  items:any[] =[]

  constructor() { }

  ngOnInit() {
    this.items =[
      {id:1, nombre:'Ajuste 1'}, 
      {id:2, nombre:'Ajuste 2'},
      {id:3, nombre:'Ajuste 3'},
      {id:4, nombre:'Ajuste 4'}
    ]
  };

}
