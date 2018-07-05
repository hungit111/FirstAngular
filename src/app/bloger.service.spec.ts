import { TestBed, inject } from '@angular/core/testing';

import { BlogerService } from './bloger.service';

describe('BlogerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogerService]
    });
  });

  it('should be created', inject([BlogerService], (service: BlogerService) => {
    expect(service).toBeTruthy();
  }));
});
