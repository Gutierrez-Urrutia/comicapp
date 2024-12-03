import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { TiendaPage } from './tienda.page';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { responseMock } from 'src/app/mocks/response.mock';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



describe('TiendaPage', () => {
  let component: TiendaPage;
  let fixture: ComponentFixture<TiendaPage>;
  
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ TiendaPage ],
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(TiendaPage);
    component = fixture.componentInstance; 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(TiendaPage).toBeTruthy();
  });
  
});