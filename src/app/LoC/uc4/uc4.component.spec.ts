import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Uc4Component } from './uc4.component';

describe('Uc4Component', () => {
  let component: Uc4Component;
  let fixture: ComponentFixture<Uc4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Uc4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Uc4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
