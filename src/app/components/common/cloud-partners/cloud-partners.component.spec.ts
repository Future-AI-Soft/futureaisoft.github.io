import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudPartnersComponent } from './cloud-partners.component';

describe('CloudPartnersComponent', () => {
  let component: CloudPartnersComponent;
  let fixture: ComponentFixture<CloudPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
