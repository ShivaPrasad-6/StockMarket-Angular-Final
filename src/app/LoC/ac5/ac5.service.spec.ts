import { TestBed } from '@angular/core/testing';

import { Ac5Service } from './ac5.service';

describe('Ac5Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ac5Service = TestBed.get(Ac5Service);
    expect(service).toBeTruthy();
  });
});
