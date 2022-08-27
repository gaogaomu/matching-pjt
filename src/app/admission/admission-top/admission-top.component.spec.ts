import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionTopComponent } from './admission-top.component';

describe('AdmissionTopComponent', () => {
  let component: AdmissionTopComponent;
  let fixture: ComponentFixture<AdmissionTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmissionTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
