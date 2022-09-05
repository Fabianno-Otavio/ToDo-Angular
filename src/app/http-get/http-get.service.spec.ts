import { TestBed } from '@angular/core/testing';

import { HtmlGetService } from './http-get.service';

describe('HtmlGetService', () => {
  let service: HtmlGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
