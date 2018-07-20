import { TestBed, inject } from '@angular/core/testing';

import { SpotAuthenticationService } from './spot-authentication.service';

describe('SpotAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpotAuthenticationService]
    });
  });

  it('should be created', inject([SpotAuthenticationService], (service: SpotAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
