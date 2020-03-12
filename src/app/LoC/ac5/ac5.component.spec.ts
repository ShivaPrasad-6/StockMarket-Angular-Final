import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ac5Component } from './ac5.component';

describe('Ac5Component', () => {
  let component: Ac5Component;
  let fixture: ComponentFixture<Ac5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ac5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ac5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
