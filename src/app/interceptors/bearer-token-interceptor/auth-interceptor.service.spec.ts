import { TestBed } from '@angular/core/testing';

import { TokenInterceptorService } from './bearer-token-interceptor.service';

describe('AuthInterceptorService', () => {
  let service: TokenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
