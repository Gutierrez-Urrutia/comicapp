import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-ajustes',
  templateUrl: './lista-ajustes.component.html',
  styleUrls: ['./lista-ajustes.component.scss'],
})
export class ListaAjustesComponent  implements OnInit {
  items:any[] =[]

  constructor(private router:Router) { }

  ngOnInit() {
    this.items = ['Ajuste 1', 'Ajuste 2', 'Ajuste 3','Ajuste 4']
     
  };

}
