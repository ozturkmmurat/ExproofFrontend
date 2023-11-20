import { TestBed } from '@angular/core/testing';

import { UrunDetayService } from './urun-detay.service';

describe('UrunDetayService', () => {
  let service: UrunDetayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrunDetayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
