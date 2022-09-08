import { TestBed } from '@angular/core/testing';

import { HttpGetService } from '../../shared/services/http-get.service';

describe('HtmlGetService', () => {
  let service: HttpGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
