import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct title', () => {
    expect(component.title).toBe('One Hub Dashboard');
  });

  it('should display cards correctly', () => {
    expect(component.cards.length).toBe(3);
    expect(component.cards[0].title).toContain('Angular Docs');
    expect(component.cards[1].title).toContain('TypeScript Docs');
    expect(component.cards[2].title).toContain('GitHub');
  });

  it('should navigate to URL using window.open', () => {
    spyOn(window, 'open');
    const testUrl = 'https://example.com';
    component.navigateTo(testUrl);
    expect(window.open).toHaveBeenCalledWith(testUrl, '_blank');
  });
});
