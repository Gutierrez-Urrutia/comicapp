import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
})
export class TabBarComponent {
  tabs: any[] = [
    {
      id: 1,
      tab: 'leyendo',
      name: 'book-outline',
      label: 'Leyendo'
    }, 
    {
      id: 2,
      tab: 'biblioteca',
      name: 'library-outline',
      label: 'Biblioteca'
    }, 
    {
      id: 3,
      tab: 'tienda',
      name: 'bag-outline',
      label: 'Tienda'
    },
    {
      id: 4,
      tab: 'ajustes',
      name: 'cog-outline',
      label: 'Ajustes'
    }
  ];
}
