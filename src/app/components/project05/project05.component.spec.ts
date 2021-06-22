import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project05Component } from './project05.component';

describe('Project05Component', () => {
  let component: Project05Component;
  let fixture: ComponentFixture<Project05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project05Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Project05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
