import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Uc2Component } from './uc2.component';

describe('Uc2Component', () => {
  let component: Uc2Component;
  let fixture: ComponentFixture<Uc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Uc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Uc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
