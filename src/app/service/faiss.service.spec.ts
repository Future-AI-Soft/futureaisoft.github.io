import { TestBed } from '@angular/core/testing';

import { FaissService } from './faiss.service';

describe('FaissService', () => {
  let service: FaissService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaissService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
