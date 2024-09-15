import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  cards = [
    {imageSrc: './../../assets/img/Daredevil1.jpg', title: 'Daredevil Vol5 #16', subtitle: '30 Páginas' },
    {imageSrc: './../../assets/img/Daredevil2.jpg', title: 'Daredevil Vol1 #28', subtitle: '36 Páginas' },
    {imageSrc: './../../assets/img/Spiderman1.jpg', title: 'Amazing Fantasy #15', subtitle: '35 Páginas'},
    {imageSrc: './../../assets/img/Ironman.jpg', title: 'Iron Man #300', subtitle: '30 Páginas'},
    {imageSrc: './../../assets/img/BatmanAnnoUno.jpg', title: 'Batman Año Uno', subtitle: '186 Páginas'},
    {imageSrc: './../../assets/img/HomunculusVol1.jpg', title: 'Homunculus Vol1', subtitle: '225 Páginas'},
    {imageSrc: './../../assets/img/BeckVol1.jpg', title: 'Beck Vol1', subtitle: '245 Páginas'},
 
 
  ]

  ngOnInit() {
    console.log("Prueba")
  }

}
