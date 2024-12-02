import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjustesPage } from './ajustes.page';

describe('AjustesPage', () => {
  let component: AjustesPage;
  let fixture: ComponentFixture<AjustesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debería llamar a poblarAcordeon y establecer isFirstLoad en false cuando ionViewDidEnter se llama por primera vez', () => {
    AjustesPage.isFirstLoad = true;
    spyOn(component, 'poblarAcordeon');
    component.ionViewDidEnter();
    expect(component.poblarAcordeon).toHaveBeenCalled();
    expect(AjustesPage.isFirstLoad).toBe(false);
  });

  it('Debería cambiar el estado de isFirstLoad a false después de llamar ionViewDidEnter', () => {
    AjustesPage.isFirstLoad = true;
    component.ionViewDidEnter();
    expect(AjustesPage.isFirstLoad).toBe(false);
  });

});
