import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardShopComponent } from './card-shop.component';
<<<<<<< HEAD
import { MarvelApiService } from 'src/app/services/marvel-api.service';
=======
import { of } from 'rxjs';

let marvelApiServiceMock: any;
>>>>>>> cc4579f49c490e644e39b7a8a604d2dce902e4db

describe('CardShopComponent', () => {
  let component: CardShopComponent;
  let fixture: ComponentFixture<CardShopComponent>;


  beforeEach(waitForAsync(() => {

    marvelApiServiceMock = {
      obtenerComics: jasmine.createSpy('obtenerComics').and.returnValue(
        of({
          data:{
            results:[
              {id: 1, title: 'comic1'},
              {id: 2, title: 'comic2'}
            ]
          }
        })
      )
    }

    TestBed.configureTestingModule({
      declarations: [ CardShopComponent ],
      imports: [IonicModule.forRoot()], 
      providers:[
        {provide:MarvelApiService, useValue:{}}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CardShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
