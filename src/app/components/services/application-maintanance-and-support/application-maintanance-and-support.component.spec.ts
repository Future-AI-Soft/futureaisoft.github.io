import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationMaintananceAndSupportComponent } from './application-maintanance-and-support.component';

describe('ApplicationMaintananceAndSupportComponent', () => {
  let component: ApplicationMaintananceAndSupportComponent;
  let fixture: ComponentFixture<ApplicationMaintananceAndSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationMaintananceAndSupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationMaintananceAndSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
