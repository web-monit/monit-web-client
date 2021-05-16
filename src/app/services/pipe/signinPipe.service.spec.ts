/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SigninPipeService } from './signinPipe.service';

describe('Service: SigninPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SigninPipeService]
    });
  });

  it('should ...', inject([SigninPipeService], (service: SigninPipeService) => {
    expect(service).toBeTruthy();
  }));
});
