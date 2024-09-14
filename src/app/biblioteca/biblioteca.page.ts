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
    {imageSrc: './../../assets/img/Daredevil1.jpg', title: 'Daredevil Vol5 #16', subtitle: '30 Páginas' },
    {imageSrc: './../../assets/img/Daredevil2.jpg', title: 'Daredevil Vol1 #28', subtitle: '36 Páginas' },
    {imageSrc: './../../assets/img/Daredevil1.jpg', title: 'Daredevil Vol5 #16', subtitle: '30 Páginas' },
    {imageSrc: './../../assets/img/Daredevil2.jpg', title: 'Daredevil Vol1 #28', subtitle: '36 Páginas' },
  ]

  ngOnInit() {
    console.log("Prueba")
  }

}
