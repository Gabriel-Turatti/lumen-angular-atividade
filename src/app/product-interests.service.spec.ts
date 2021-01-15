import { TestBed } from '@angular/core/testing';

import { ProductInterestsService } from './product-interests.service';

describe('ProductInterestsService', () => {
  let service: ProductInterestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductInterestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
