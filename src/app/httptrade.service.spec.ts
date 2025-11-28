import { TestBed } from '@angular/core/testing';

import { HttptradeService } from './httpTrade.service';

describe('HttptradeService', () => {
  let service: HttptradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttptradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
