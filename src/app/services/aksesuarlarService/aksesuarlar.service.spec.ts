import { TestBed } from '@angular/core/testing';

import { AksesuarlarService } from './aksesuarlar.service';

describe('AksesuarlarService', () => {
  let service: AksesuarlarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AksesuarlarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
