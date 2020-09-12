import { TestBed } from '@angular/core/testing';

import { FaRequestService } from './fa-request.service';

describe('FaRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaRequestService = TestBed.get(FaRequestService);
    expect(service).toBeTruthy();
  });
});
