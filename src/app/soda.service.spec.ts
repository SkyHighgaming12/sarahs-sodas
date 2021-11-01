import { TestBed } from '@angular/core/testing';

import { SodaService } from './soda.service';

describe('SodaService', () => {
  let service: SodaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SodaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
