import { TestBed } from '@angular/core/testing';

import { EscaleService } from './escale.service';

describe('EscaleService', () => {
  let service: EscaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
