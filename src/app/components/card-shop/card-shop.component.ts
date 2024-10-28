import { Component } from '@angular/core';
import { MarvelApiService} from 'src/app/services/marvel-api.service';
import { Comic } from 'src/app/interfaces/comic';
import { Response } from 'src/app/interfaces/response';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-card-shop',
  templateUrl: './card-shop.component.html',
  styleUrls: ['./card-shop.component.scss'],
})
export class CardShopComponent {

  comics: Comic[] = [];
  columnSize: number = 6;
  
  constructor(private readonly marvelService: MarvelApiService) {
    this.setColumnSize(window.innerWidth);
  }

  ngOnInit(): void {
    const comics = localStorage.getItem('comics');
    if (comics) {
      this.comics = JSON.parse(comics);
    } else {
      this.marvelService.obtenerComics().subscribe((response: Response) => {
        this.comics = response.data.results;
        localStorage.setItem('comics', JSON.stringify(this.comics));
      });
    }
  }

  setColumnSize(width: number) {
    this.columnSize = width >= 768 ? 3 : 6; // Cambia según tu lógica
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window;
    this.setColumnSize(target.innerWidth);
  }

}
