import { TestBed } from '@angular/core/testing';

import { ProductItemResolverService } from './product-item-resolver.service';

describe('ProductItemResolverService', () => {
  let service: ProductItemResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductItemResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
