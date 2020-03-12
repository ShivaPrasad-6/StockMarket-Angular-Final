import { TestBed } from '@angular/core/testing';

import { Ac6Service } from './ac6.service';

describe('Ac6Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ac6Service = TestBed.get(Ac6Service);
    expect(service).toBeTruthy();
  });
});
