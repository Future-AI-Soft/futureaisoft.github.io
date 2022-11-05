import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RFPSubmissionComponent } from './rfp-submission.component';

describe('RFPSubmissionComponent', () => {
  let component: RFPSubmissionComponent;
  let fixture: ComponentFixture<RFPSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RFPSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RFPSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
