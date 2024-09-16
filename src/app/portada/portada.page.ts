import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import 'moment/locale/es';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.page.html',
  styleUrls: ['./portada.page.scss'],
})
export class PortadaPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.mostrarFechaActual();
  }

  mostrarFechaActual(): void {
    moment.locale('es');
    const fechaActual = moment().format('MMMM Do YYYY');
    const labelFecha: any = document.querySelector('#fecha');
    labelFecha.innerHTML = 'Última actualización: ' + fechaActual;
  }
 
}
