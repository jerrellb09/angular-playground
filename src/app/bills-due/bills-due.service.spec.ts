import { TestBed } from '@angular/core/testing';

import { BillsDueService } from './bills-due.service';

describe('BillsDueService', () => {
  let service: BillsDueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillsDueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
