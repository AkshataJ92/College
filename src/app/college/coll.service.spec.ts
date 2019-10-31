import { TestBed } from '@angular/core/testing';

import { collService } from './coll.service';

describe('EmpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: collService = TestBed.get(collService);
    expect(service).toBeTruthy();
  });
});
