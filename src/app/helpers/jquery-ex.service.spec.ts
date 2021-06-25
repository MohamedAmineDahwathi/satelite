import { TestBed } from '@angular/core/testing';

import { JqueryExService } from './jquery-ex.service';

describe('JqueryExService', () => {
  let service: JqueryExService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JqueryExService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
