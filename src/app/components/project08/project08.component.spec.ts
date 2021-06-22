import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project08Component } from './project08.component';

describe('Project08Component', () => {
  let component: Project08Component;
  let fixture: ComponentFixture<Project08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project08Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Project08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
