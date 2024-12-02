import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {
  private static isFirstLoad: boolean = true;
  constructor() { }

  ngOnInit() {
   
  }

  ionViewDidEnter(){
    if (AjustesPage.isFirstLoad) {
      this.poblarAcordeon();
      AjustesPage.isFirstLoad = false;
    }
  }

  poblarAcordeon(): void {
    const div1: HTMLElement | any = document.querySelector('#ajuste1');
    const div2: HTMLElement | any = document.querySelector('#ajuste2');
    const div3: HTMLElement | any = document.querySelector('#ajuste3');
    const div4: HTMLElement | any = document.querySelector('#ajuste4');

    if (div1){
      const ionItem = document.createElement('ion-item');
      const ionToggle = document.createElement('ion-toggle');
      ionToggle.setAttribute('justify', 'space-between');
      ionToggle.innerHTML = 'Activar Renderizado';
      ionItem.appendChild(ionToggle);
      
      const ionItem2 = document.createElement('ion-item');
      const ionToggle2 = document.createElement('ion-toggle');
      ionToggle2.setAttribute('justify', 'space-between');
      ionToggle2.innerHTML = 'Activar Modo Oscuro';
      ionItem2.appendChild(ionToggle2);

      ionToggle2.addEventListener('ionChange', (event) => {
        const isChecked = event.detail.checked;
        document.body.classList.toggle('dark', isChecked);
      });

      div1.appendChild(ionItem);
      div1.appendChild(ionItem2);

      const label: any = document.querySelector('#label-ajuste-1');
      label.innerText = 'Pantalla';

    }

    if (div2){
      const ionItem = document.createElement('ion-item');
      const ionItem2 = document.createElement('ion-item');

      const ionToggle = document.createElement('ion-toggle');
      ionToggle.setAttribute('justify', 'space-between');
      ionToggle.innerHTML = 'Activar Efectos de Sonido';
      ionItem.appendChild(ionToggle);
      
      const ionSelect = document.createElement('ion-select');
      ionSelect.setAttribute('label', 'Sonido Dolby Atmos');
      ionSelect.setAttribute('justify', 'space-between');
      

      const ionOption = document.createElement('ion-select-option');
      ionOption.setAttribute('value', '1');
      ionOption.innerHTML = 'Sí';
      ionSelect.appendChild(ionOption);
      
      const ionOption2 = document.createElement('ion-select-option');
      ionOption2.setAttribute('value', '2');
      ionOption2.innerHTML = 'No';
      ionSelect.appendChild(ionOption2);

      ionItem2.appendChild(ionSelect);
      div2.appendChild(ionItem);
      div2.appendChild(ionItem2);

      const label: any = document.querySelector('#label-ajuste-2');
      label.innerText = 'Sonido';
    }

    if (div3){
      const ionItem = document.createElement('ion-item');
      const ionSelect = document.createElement('ion-select');
      ionSelect.setAttribute('label', 'Activar Control Parental');
      ionSelect.setAttribute('justify', 'space-between');
      ionSelect.setAttribute('label-placement', 'Opciones');

      const ionOption = document.createElement('ion-select-option');
      ionOption.setAttribute('value', '1');
      ionOption.innerHTML = 'Sí';
      ionSelect.appendChild(ionOption);

      const ionOption2 = document.createElement('ion-select-option');
      ionOption2.setAttribute('value', '2');
      ionOption2.innerHTML = 'No';
      ionSelect.appendChild(ionOption2);

      ionItem.appendChild(ionSelect);
      div3.appendChild(ionItem);

      const ionItem2 = document.createElement('ion-item');
      const ionSelect2 = document.createElement('ion-select');
      ionSelect2.setAttribute('label', 'Activar Pin de Seguridad');
      ionSelect2.setAttribute('justify', 'space-between');
      ionSelect2.setAttribute('label-placement', 'Opciones');

      ionSelect2.appendChild(ionOption);
      ionSelect2.appendChild(ionOption2);
      ionItem2.appendChild(ionSelect2);
      div3.appendChild(ionItem2);

      const label: any = document.querySelector('#label-ajuste-3');
      label.innerText = 'Seguridad';
    }

    if (div4){

      const ionItem = document.createElement('ion-item');
      const ionInput = document.createElement('ion-input');
      ionInput.setAttribute('label', 'Seleccionar Color de Fondo');
      ionInput.setAttribute('justify', 'space-between');
      ionInput.setAttribute('type', 'color');

      ionItem.appendChild(ionInput);
      div4.appendChild(ionItem);

      const label: any = document.querySelector('#label-ajuste-4');
      label.innerText = 'Fondo';
    }
    
  }

  
 

}
