import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ac2Component } from './ac2.component';

describe('Ac2Component', () => {
  let component: Ac2Component;
  let fixture: ComponentFixture<Ac2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ac2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ac2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
