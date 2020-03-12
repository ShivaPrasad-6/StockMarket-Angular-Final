import { TestBed } from '@angular/core/testing';

import { HighchartsserviceService } from './highchartsservice.service';

describe('HighchartsserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HighchartsserviceService = TestBed.get(HighchartsserviceService);
    expect(service).toBeTruthy();
  });
});
