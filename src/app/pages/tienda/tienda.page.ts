import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../../services/marvel-api.service';
import { Comic } from '../../interfaces/comic';
import { Response } from '../../interfaces/response';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {
  comics: Comic[] = [];
  constructor(private readonly marvelService: MarvelApiService) {}

  ngOnInit(): void {
    const comics = localStorage.getItem('comics');
    if (comics) {
      this.comics = JSON.parse(comics);
    } else {
      this.marvelService.obtenerComics().subscribe((response: Response) => {
        console.log(response);
        this.comics = response.data.results;
        localStorage.setItem('comics', JSON.stringify(this.comics));
      });
    }
  }
}
