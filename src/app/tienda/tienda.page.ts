import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../services/marvel-api.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {

  comics: any = [];
  constructor(private readonly marvelService: MarvelApiService) { }

  ngOnInit(): void {

 
    const comics = localStorage.getItem('comics');

    if(comics){
      this.comics = JSON.parse(comics);
    } else {
      this.marvelService.obtenerComics().subscribe((response: any) =>{
        this.comics = response;
        localStorage.setItem('comics', JSON.stringify(this.comics));
        
      });
    }
  }

}
