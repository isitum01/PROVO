import { TestBed } from '@angular/core/testing';

import { PopustiService } from './popusti.service';

describe('PopustiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopustiService = TestBed.get(PopustiService);
    expect(service).toBeTruthy();
  });
});
