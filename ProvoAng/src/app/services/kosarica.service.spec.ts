import { TestBed } from '@angular/core/testing';

import { KosaricaService } from './kosarica.service';

describe('KosaricaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KosaricaService = TestBed.get(KosaricaService);
    expect(service).toBeTruthy();
  });
});
