import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinduserComponent } from './finduser.component';

describe('FinduserComponent', () => {
  let component: FinduserComponent;
  let fixture: ComponentFixture<FinduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinduserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
