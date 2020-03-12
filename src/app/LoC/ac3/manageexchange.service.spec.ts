import { TestBed } from '@angular/core/testing';

import { ManageexchangeService } from './manageexchange.service';

describe('ManageexchangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageexchangeService = TestBed.get(ManageexchangeService);
    expect(service).toBeTruthy();
  });
});
