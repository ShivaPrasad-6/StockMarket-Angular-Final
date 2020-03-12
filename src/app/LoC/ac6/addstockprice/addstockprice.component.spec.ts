import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstockpriceComponent } from './addstockprice.component';

describe('AddstockpriceComponent', () => {
  let component: AddstockpriceComponent;
  let fixture: ComponentFixture<AddstockpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstockpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstockpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
