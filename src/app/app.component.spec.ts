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

  it('should initialize the app', () => {
    const spy = spyOn(component, 'toggleDarkTheme');
    component.initializeApp();
    expect(spy).toHaveBeenCalledWith(window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  it('should toggle dark theme', () => {
    component.toggleDarkTheme(true);
    expect(document.body.getAttribute('theme')).toBe('dark');
    component.toggleDarkTheme(false);
    expect(document.body.getAttribute('theme')).toBe('light');
  });
});
