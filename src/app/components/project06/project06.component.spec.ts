import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project06Component } from './project06.component';

describe('Project06Component', () => {
  let component: Project06Component;
  let fixture: ComponentFixture<Project06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project06Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Project06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
