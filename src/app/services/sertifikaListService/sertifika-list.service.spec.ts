import { TestBed } from '@angular/core/testing';

import { SertifikaListService } from './sertifika-list.service';

describe('SertifikaListService', () => {
  let service: SertifikaListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SertifikaListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
