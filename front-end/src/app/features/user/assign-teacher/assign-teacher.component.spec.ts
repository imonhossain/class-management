import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigntTeacherComponent } from './assignt-teacher.component';

describe('AssigntTeacherComponent', () => {
  let component: AssigntTeacherComponent;
  let fixture: ComponentFixture<AssigntTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigntTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigntTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
