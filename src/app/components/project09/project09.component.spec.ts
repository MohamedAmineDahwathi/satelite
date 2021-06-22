import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project09Component } from './project09.component';

describe('Project09Component', () => {
  let component: Project09Component;
  let fixture: ComponentFixture<Project09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project09Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Project09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
