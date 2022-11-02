import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendUiUxComponent } from './frontend-ui-ux.component';

describe('FrontendUiUxComponent', () => {
  let component: FrontendUiUxComponent;
  let fixture: ComponentFixture<FrontendUiUxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendUiUxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendUiUxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
