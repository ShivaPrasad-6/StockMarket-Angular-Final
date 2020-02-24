import { TestBed } from '@angular/core/testing';

import { Ac2serviceService } from './ac2service.service';

describe('Ac2serviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ac2serviceService = TestBed.get(Ac2serviceService);
    expect(service).toBeTruthy();
  });
});
