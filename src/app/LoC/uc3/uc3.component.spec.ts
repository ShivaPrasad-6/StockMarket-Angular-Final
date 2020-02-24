import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Uc3Component } from './uc3.component';

describe('Uc3Component', () => {
  let component: Uc3Component;
  let fixture: ComponentFixture<Uc3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Uc3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Uc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
