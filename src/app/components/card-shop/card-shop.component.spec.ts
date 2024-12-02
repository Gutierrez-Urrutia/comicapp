import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { CardShopComponent } from './card-shop.component';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { SharedComponentsModule } from '../shared/shared-components.module';

let marvelApiServiceMock: any;
describe('CardShopComponent', () => {
  let component: CardShopComponent;
  let fixture: ComponentFixture<CardShopComponent>;

  beforeEach(waitForAsync(() => {
    marvelApiServiceMock = jasmine.createSpyObj('MarvelApiService', ['getCharacters']);
    TestBed.configureTestingModule({
      declarations: [ CardShopComponent ],
      imports: [IonicModule.forRoot()], 
      providers:[
        {provide:MarvelApiService, useValue: of({})}
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



