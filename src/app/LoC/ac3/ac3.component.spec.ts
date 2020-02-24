import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ac3Component } from './ac3.component';

describe('Ac3Component', () => {
  let component: Ac3Component;
  let fixture: ComponentFixture<Ac3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ac3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ac3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
