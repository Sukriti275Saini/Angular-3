import { TestBed } from '@angular/core/testing';

import { NewcustomersService } from './newcustomers.service';

describe('NewcustomersService', () => {
  let service: NewcustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewcustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
