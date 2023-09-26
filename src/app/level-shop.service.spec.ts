import { TestBed } from '@angular/core/testing';

import { LevelShopService } from './level-shop.service';

describe('LevelShopService', () => {
  let service: LevelShopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LevelShopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
