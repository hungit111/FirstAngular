import { TestBed, inject } from '@angular/core/testing';

import { BlacklistService } from './blacklist.service';

describe('BlacklistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlacklistService]
    });
  });

  it('should be created', inject([BlacklistService], (service: BlacklistService) => {
    expect(service).toBeTruthy();
  }));
});
