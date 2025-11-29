import { TestBed } from '@angular/core/testing';

import { College } from './college';

describe('College', () => {
  let service: College;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(College);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
