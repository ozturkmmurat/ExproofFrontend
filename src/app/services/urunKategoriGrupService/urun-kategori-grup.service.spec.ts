import { TestBed } from '@angular/core/testing';

import { UrunKategoriGrupService } from './urun-kategori-grup.service';

describe('UrunKategoriGrupService', () => {
  let service: UrunKategoriGrupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrunKategoriGrupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
