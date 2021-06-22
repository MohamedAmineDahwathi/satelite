import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHiddenComponent } from './footer-hidden.component';

describe('FooterHiddenComponent', () => {
  let component: FooterHiddenComponent;
  let fixture: ComponentFixture<FooterHiddenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterHiddenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterHiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
