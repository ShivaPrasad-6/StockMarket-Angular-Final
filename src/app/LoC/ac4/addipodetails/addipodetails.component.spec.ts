import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddipodetailsComponent } from './addipodetails.component';

describe('AddipodetailsComponent', () => {
  let component: AddipodetailsComponent;
  let fixture: ComponentFixture<AddipodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddipodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddipodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
