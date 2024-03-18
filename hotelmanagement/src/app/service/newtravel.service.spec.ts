import { TestBed } from '@angular/core/testing';

import { NewtravelService } from './newtravel.service';

describe('NewtravelService', () => {
  let service: NewtravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewtravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
