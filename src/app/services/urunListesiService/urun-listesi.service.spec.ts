import { TestBed } from '@angular/core/testing';

import { UrunListesiService } from './urun-listesi.service';

describe('UrunListesiService', () => {
  let service: UrunListesiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrunListesiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
