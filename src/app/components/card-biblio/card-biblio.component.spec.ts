import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardBiblioComponent } from './card-biblio.component';

describe('CardBiblioComponent', () => {
  let component: CardBiblioComponent;
  let fixture: ComponentFixture<CardBiblioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBiblioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardBiblioComponent);
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
