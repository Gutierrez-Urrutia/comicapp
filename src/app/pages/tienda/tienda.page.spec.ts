import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TiendaPage } from './tienda.page';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { MarvelApiServiceMock } from 'src/app/mocks/MarvelApiServiceMock';
import { responseMock } from 'src/app/mocks/response.mock';


describe('TiendaPage', () => {
  let component: TiendaPage;
  let fixture: ComponentFixture<TiendaPage>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ TiendaPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: MarvelApiService,
          useValue: MarvelApiServiceMock
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TiendaPage);
    fixture.detectChanges();
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
    expect(MarvelApiServiceMock.obtenerComics).toHaveBeenCalled();
  }));
  
});