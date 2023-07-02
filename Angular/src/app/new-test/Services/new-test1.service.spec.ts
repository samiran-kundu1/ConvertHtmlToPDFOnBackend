import { TestBed } from '@angular/core/testing';

import { NewTest1Service } from './new-test1.service';

describe('NewTest1Service', () => {
  let service: NewTest1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewTest1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
