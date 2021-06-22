import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexFullComponent } from './index-full.component';

describe('IndexFullComponent', () => {
  let component: IndexFullComponent;
  let fixture: ComponentFixture<IndexFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
