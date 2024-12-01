import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardShopComponent } from './card-shop.component';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

describe('CardShopComponent', () => {
  let component: CardShopComponent;
  let fixture: ComponentFixture<CardShopComponent>;

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
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
