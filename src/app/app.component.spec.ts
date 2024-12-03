import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar la aplicación', () => {
    const spy = spyOn(component, 'toggleDarkTheme');
    component.initializeApp();
    expect(spy).toHaveBeenCalledWith(window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  it('debería alternar el tema oscuro', () => {
    component.toggleDarkTheme(true);
    expect(document.body.getAttribute('theme')).toBe('dark');
    component.toggleDarkTheme(false);
    expect(document.body.getAttribute('theme')).toBe('light');
  });

  it('debería actualizar el tema cuando cambia la preferencia del sistema', () => {
    const spy = spyOn(component, 'toggleDarkTheme');
    const matchMediaMock = {
      matches: true,
      addListener: jasmine.createSpy('addListener').and.callFake((callback: any) => {
        callback({ matches: true });
      })
    };
    spyOn(window, 'matchMedia').and.returnValue(matchMediaMock as any);
    component.initializeApp();
    expect(spy).toHaveBeenCalledWith(true);
    matchMediaMock.addListener.calls.mostRecent().args[0]({ matches: false });
    expect(spy).toHaveBeenCalledWith(false);
  });
});
