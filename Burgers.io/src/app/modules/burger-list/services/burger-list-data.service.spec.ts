import { TestBed } from '@angular/core/testing';

import { BurgerListDataService } from './burger-list-data.service';

describe('BurgerListDataService', () => {
  let service: BurgerListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BurgerListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
