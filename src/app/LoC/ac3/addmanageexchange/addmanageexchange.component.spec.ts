import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmanageexchangeComponent } from './addmanageexchange.component';

describe('AddmanageexchangeComponent', () => {
  let component: AddmanageexchangeComponent;
  let fixture: ComponentFixture<AddmanageexchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmanageexchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmanageexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
