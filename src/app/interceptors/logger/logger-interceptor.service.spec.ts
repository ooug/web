import { TestBed } from '@angular/core/testing';

import { LoggerInterceptorService } from './logger-interceptor.service';

describe('LoggerInterceptorService', () => {
  let service: LoggerInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
