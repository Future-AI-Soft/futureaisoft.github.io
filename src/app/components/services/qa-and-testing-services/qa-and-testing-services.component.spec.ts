import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QaAndTestingServicesComponent } from './qa-and-testing-services.component';

describe('QaAndTestingServicesComponent', () => {
  let component: QaAndTestingServicesComponent;
  let fixture: ComponentFixture<QaAndTestingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QaAndTestingServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QaAndTestingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
