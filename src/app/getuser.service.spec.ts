import { TestBed } from '@angular/core/testing';

import { GetUserService } from './getuser.service';

describe('GetuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetUserService = TestBed.get(GetUserService);
    expect(service).toBeTruthy();
  });
});
