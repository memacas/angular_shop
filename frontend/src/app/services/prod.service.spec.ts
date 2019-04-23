import { TestBed, inject } from '@angular/core/testing';

import { ProdService } from './prod.service';

describe('ProdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdService]
    });
  });

  it('should ...', inject([ProdService], (service: ProdService) => {
    expect(service).toBeTruthy();
  }));
});
