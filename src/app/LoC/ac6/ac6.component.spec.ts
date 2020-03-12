import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ac6Component } from './ac6.component';

describe('Ac6Component', () => {
  let component: Ac6Component;
  let fixture: ComponentFixture<Ac6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ac6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ac6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
