import { ComponentFixture, TestBed, waitForAsync, fakeAsync, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CardShopComponent } from './card-shop.component';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { responseMock } from 'src/app/mocks/response.mock';


describe('CardShopComponent', () => {
  let component: CardShopComponent;
  let fixture: ComponentFixture<CardShopComponent>;
  let service: MarvelApiService;

  beforeEach(waitForAsync(() => {
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
    service = TestBed.inject(MarvelApiService);
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

  it('Debería cargar los cómics desde localStorage si están disponibles', () => {
    localStorage.setItem('comics', JSON.stringify(responseMock.data.results));
    fixture.detectChanges();
    expect(component.comics).toEqual(responseMock.data.results);
  });

  it('Debería obtener los cómics desde MarvelApiService si no hay cómics en localStorage', fakeAsync(() => {
    localStorage.removeItem('comics');
    component.ngOnInit();
    tick();
    expect(component.comics).toEqual(responseMock.data.results);
    expect(service.obtenerComics).toHaveBeenCalled();
  }));

  

});
