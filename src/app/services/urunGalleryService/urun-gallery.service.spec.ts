import { TestBed } from '@angular/core/testing';

import { UrunGalleryService } from './urun-gallery.service';

describe('UrunGalleryService', () => {
  let service: UrunGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrunGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
