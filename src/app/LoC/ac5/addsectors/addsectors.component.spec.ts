import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsectorsComponent } from './addsectors.component';

describe('AddsectorsComponent', () => {
  let component: AddsectorsComponent;
  let fixture: ComponentFixture<AddsectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
