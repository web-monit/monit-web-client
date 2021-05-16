/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlerterService } from './alerter.service';

describe('Service: Alerter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlerterService]
    });
  });

  it('should ...', inject([AlerterService], (service: AlerterService) => {
    expect(service).toBeTruthy();
  }));
});
