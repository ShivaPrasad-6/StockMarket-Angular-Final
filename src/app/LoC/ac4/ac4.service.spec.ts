import { TestBed } from '@angular/core/testing';

import { Ac4Service } from './ac4.service';

describe('Ac4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ac4Service = TestBed.get(Ac4Service);
    expect(service).toBeTruthy();
  });
});
