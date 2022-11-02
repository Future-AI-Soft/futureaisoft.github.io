import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevopsServiceComponent } from './devops-service.component';

describe('DevopsServiceComponent', () => {
  let component: DevopsServiceComponent;
  let fixture: ComponentFixture<DevopsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevopsServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevopsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
