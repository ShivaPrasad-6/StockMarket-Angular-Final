import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ac4Component } from './ac4.component';

describe('Ac4Component', () => {
  let component: Ac4Component;
  let fixture: ComponentFixture<Ac4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ac4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ac4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
