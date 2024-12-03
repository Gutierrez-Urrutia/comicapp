import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardShopComponent } from './card-shop.component';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { of } from 'rxjs';

describe('CardShopComponent', () => {
  let component: CardShopComponent;
  let fixture: ComponentFixture<CardShopComponent>;

  beforeEach(waitForAsync(() => {

    marvelApiServiceMock = jasmine.createSpyObj('MarvelApiService', ['obtenerComics']);

    TestBed.configureTestingModule({
      declarations: [ CardShopComponent ],
      imports: [IonicModule.forRoot()], 
      providers:[
        {provide:MarvelApiService, useValue: marvelApiServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CardShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería quedar en 3 el columnSize si el ancho es mayor o igual a 768', () => {
    component.setColumnSize(800); 
    expect(component.columnSize).toBe(3);
  });

  it('Debería quedar en 6 el columnSize si el ancho es menor que 768', () => {
    component.setColumnSize(600);
    expect(component.columnSize).toBe(6);
  });

  it('Debería llamar a setColumnSize con window.innerWidth al redimensionar', () => {
    spyOn(component, 'setColumnSize');
    const mockEvent = { target: { innerWidth: 800 } };
    component.onResize(mockEvent as unknown as Event);  
    expect(component.setColumnSize).toHaveBeenCalledWith(800); 
  });

});
