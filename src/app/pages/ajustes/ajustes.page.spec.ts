import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjustesPage } from './ajustes.page';

describe('AjustesPage', () => {
  let component: AjustesPage;
  let fixture: ComponentFixture<AjustesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const div1 = document.createElement('div');
    div1.id = 'ajuste1';
    document.body.appendChild(div1);

    const div2 = document.createElement('div');
    div2.id = 'ajuste2';
    document.body.appendChild(div2);

    const div3 = document.createElement('div');
    div3.id = 'ajuste3';
    document.body.appendChild(div3);

    const div4 = document.createElement('div');
    div4.id = 'ajuste4';
    document.body.appendChild(div4);

    const label1 = document.createElement('label');
    label1.id = 'label-ajuste-1';
    document.body.appendChild(label1);

    const label2 = document.createElement('label');
    label2.id = 'label-ajuste-2';
    document.body.appendChild(label2);

    const label3 = document.createElement('label');
    label3.id = 'label-ajuste-3';
    document.body.appendChild(label3);

    const label4 = document.createElement('label');
    label4.id = 'label-ajuste-4';
    document.body.appendChild(label4);
  });

  afterEach(() => {
    
    const div1 = document.querySelector('#ajuste1');
    const div2 = document.querySelector('#ajuste2');
    const div3 = document.querySelector('#ajuste3');
    const div4 = document.querySelector('#ajuste4');
    const label1 = document.querySelector('#label-ajuste-1');
    const label2 = document.querySelector('#label-ajuste-2');
    const label3 = document.querySelector('#label-ajuste-3');
    const label4 = document.querySelector('#label-ajuste-4');

    if (div1) document.body.removeChild(div1);
    if (div2) document.body.removeChild(div2);
    if (div3) document.body.removeChild(div3);
    if (div4) document.body.removeChild(div4);
    if (label1) document.body.removeChild(label1);
    if (label2) document.body.removeChild(label2);
    if (label3) document.body.removeChild(label3);
    if (label4) document.body.removeChild(label4);
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

  it('Debería poblar acordeones correctamente', () => {
    spyOn(document, 'querySelector').and.callThrough();
    component.poblarAcordeon();
    expect(document.querySelector).toHaveBeenCalledWith('#ajuste1');
    expect(document.querySelector).toHaveBeenCalledWith('#ajuste2');
    expect(document.querySelector).toHaveBeenCalledWith('#ajuste3');
    expect(document.querySelector).toHaveBeenCalledWith('#ajuste4');
  });

  it('Debería agregar elementos a div1 correctamente', () => {
    const div1 = document.querySelector('#ajuste1');
    component.poblarAcordeon();
    if (div1) {
      expect(div1.children.length).toBe(2);
    }
  });

  it('Debería agregar elementos a div2 correctamente', () => {
    const div2 = document.querySelector('#ajuste2');
    component.poblarAcordeon();
    if (div2) {
      expect(div2.children.length).toBe(2);
    }
  });

  it('Debería agregar elementos a div3 correctamente', () => {
    const div3 = document.querySelector('#ajuste3');
    component.poblarAcordeon();
    if (div3) {
      expect(div3.children.length).toBe(2);
    }
  });

  it('Debería agregar elementos a div4 correctamente', () => {
    const div4 = document.querySelector('#ajuste4');
    component.poblarAcordeon();
    if (div4) {
      expect(div4.children.length).toBe(1);
    }
  });

  it('Debería cambiar el texto del label de div1 correctamente', () => {
    const label = document.querySelector('#label-ajuste-1');
    component.poblarAcordeon();
    if (label) {
      expect((label as HTMLElement).innerText).toBe('Pantalla');
    }
  });

  it('Debería cambiar el texto del label de div2 correctamente', () => {
    const label = document.querySelector('#label-ajuste-2');
    component.poblarAcordeon();
    if (label) {
      expect((label as HTMLElement).innerText).toBe('Sonido');
    }
  });

  it('Debería cambiar el texto del label de div3 correctamente', () => {
    const label = document.querySelector('#label-ajuste-3');
    component.poblarAcordeon();
    if (label) {
      expect((label as HTMLElement).innerText).toBe('Seguridad');
    }
  });

  it('Debería cambiar el texto del label de div4 correctamente', () => {
    const label = document.querySelector('#label-ajuste-4');
    component.poblarAcordeon();
    if (label) {
      expect((label as HTMLElement).innerText).toBe('Fondo');
    }
  });

  it('should enable dark mode', () => {
    component.toggleDarkMode(true);
    expect(document.body.classList.contains('dark')).toBeTrue();
  });

  it('should disable dark mode', () => {
    document.body.classList.add('dark');
    component.toggleDarkMode(false);
    expect(document.body.classList.contains('dark')).toBeFalse();
  });

  it('Debería activar el modo oscuro cuando el toggle se activa', () => {
    const toggle = document.createElement('ion-toggle');
    document.body.appendChild(toggle);
    spyOn(component, 'toggleDarkMode').and.callThrough();
    toggle.addEventListener('ionChange', (event: any) => {
      component.toggleDarkMode(event.detail.checked);
    });
    toggle.dispatchEvent(new CustomEvent('ionChange', { detail: { checked: true } }));
    fixture.detectChanges();
    expect(component.toggleDarkMode).toHaveBeenCalledWith(true);
    expect(document.body.classList.contains('dark')).toBe(true);
    document.body.removeChild(toggle);
  });

  it('Debería desactivar el modo oscuro cuando el toggle se desactiva', () => {
    const toggle = document.createElement('ion-toggle');
    document.body.appendChild(toggle);
    spyOn(component, 'toggleDarkMode').and.callThrough();
    toggle.addEventListener('ionChange', (event: any) => {
      component.toggleDarkMode(event.detail.checked);
    });
    toggle.dispatchEvent(new CustomEvent('ionChange', { detail: { checked: false } }));
    fixture.detectChanges();
    expect(component.toggleDarkMode).toHaveBeenCalledWith(false);
    expect(document.body.classList.contains('dark')).toBe(false);
    document.body.removeChild(toggle);
  });

});
