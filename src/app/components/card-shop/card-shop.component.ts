import { Component, HostListener, OnInit } from '@angular/core';
import { MarvelApiService} from 'src/app/services/marvel-api.service';
import { Comic } from 'src/app/interfaces/comic';
import { Response } from 'src/app/interfaces/response';


@Component({
  selector: 'app-card-shop',
  templateUrl: './card-shop.component.html',
  styleUrls: ['./card-shop.component.scss'],
})
export class CardShopComponent implements OnInit{

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
        this.marvelService.obtenerComics().subscribe({
          next: (response: Response) =>{
            this.comics = response.data.results;
            localStorage.setItem('comics', JSON.stringify(this.comics));
          },
          error: (error: any) => {
            console.error('Error al obtener los cómics', error);
          },
        });
    }
  }

  setColumnSize(width: number) {
    this.columnSize = width >= 768 ? 3 : 6;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window;
    this.setColumnSize(target.innerWidth);
  }

  public alertButtons = [
    {
      text: 'No',
      role: 'cancel',
      cssClass: "alert-button-confirm",
      id: 'alert-button-cancel',
    },
    {
      text: 'Sí',
      role: 'confirm',
      cssClass: "alert-button-confirm",
      id: 'alert-button-confirm',
    },
  ];

  public header = '¿Desea continuar con la compra?';
  public message = 'Será transferido a la plataforma de pagos';

}
