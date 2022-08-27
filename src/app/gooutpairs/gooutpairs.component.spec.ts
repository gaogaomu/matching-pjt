import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooutpairsComponent } from './gooutpairs.component';

describe('GooutpairsComponent', () => {
  let component: GooutpairsComponent;
  let fixture: ComponentFixture<GooutpairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooutpairsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GooutpairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
