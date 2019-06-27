import { TestBed } from '@angular/core/testing';

import { NarudzbeService } from './narudzbe.service';

describe('NarudzbeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NarudzbeService = TestBed.get(NarudzbeService);
    expect(service).toBeTruthy();
  });
});
