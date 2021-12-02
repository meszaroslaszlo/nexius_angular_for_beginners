import { TestBed } from '@angular/core/testing';

import { CustomShortsService } from './custom-shorts.service';

describe('CustomShortsService', () => {
  let service: CustomShortsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomShortsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
