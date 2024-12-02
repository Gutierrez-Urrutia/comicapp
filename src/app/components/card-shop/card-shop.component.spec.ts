import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardShopComponent } from './card-shop.component';
import { of } from 'rxjs';

let marvelApiServiceMock: any;

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
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
