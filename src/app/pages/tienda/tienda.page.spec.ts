import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TiendaPage } from './tienda.page';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { responseMock } from 'src/app/mocks/response.mock';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



describe('TiendaPage', () => {
  let component: TiendaPage;
  let fixture: ComponentFixture<TiendaPage>;
  let service: MarvelApiService;
  beforeEach(async () => {
    let marvelApiServiceMock = {
      obtenerComics: jasmine.createSpy('obtenerComics').and.returnValue(of(responseMock))
    };

    await TestBed.configureTestingModule({
      declarations: [ TiendaPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: MarvelApiService,
          useValue: marvelApiServiceMock
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(TiendaPage);
    component = fixture.componentInstance; 
    fixture.detectChanges();
    service = TestBed.inject(MarvelApiService);
  });

  it('should create', () => {
    expect(TiendaPage).toBeTruthy();
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