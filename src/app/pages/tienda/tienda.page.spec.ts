import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TiendaPage } from './tienda.page';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { MarvelApiServiceMock } from 'src/app/mocks/MarvelApiServiceMock';
import { SharedComponentsModule } from 'src/app/components/shared/shared-components.module';


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
});