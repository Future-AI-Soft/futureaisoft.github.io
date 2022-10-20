import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingWithFaiComponent } from './working-with-fai.component';

describe('WorkingWithFaiComponent', () => {
  let component: WorkingWithFaiComponent;
  let fixture: ComponentFixture<WorkingWithFaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingWithFaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingWithFaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
