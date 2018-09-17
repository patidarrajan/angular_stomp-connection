import { TestBed, inject } from '@angular/core/testing';

import { StompConnectService } from './stomp-connect.service';

describe('StompConnectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StompConnectService]
    });
  });

  it('should be created', inject([StompConnectService], (service: StompConnectService) => {
    expect(service).toBeTruthy();
  }));
});
