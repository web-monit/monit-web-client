/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SignoutPipeService } from './signoutPipe.service';

describe('Service: SignoutPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignoutPipeService]
    });
  });

  it('should ...', inject([SignoutPipeService], (service: SignoutPipeService) => {
    expect(service).toBeTruthy();
  }));
});
