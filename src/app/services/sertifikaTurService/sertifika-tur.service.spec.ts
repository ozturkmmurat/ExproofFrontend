import { TestBed } from '@angular/core/testing';

import { SertifikaTurService } from './sertifika-tur.service';

describe('SertifikaTurService', () => {
  let service: SertifikaTurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SertifikaTurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
