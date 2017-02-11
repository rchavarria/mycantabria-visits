/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CentralStoreService } from './central-store.service';

describe('CentralStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CentralStoreService]
    });
  });

  it('should ...', inject([CentralStoreService], (service: CentralStoreService) => {
    expect(service).toBeTruthy();
  }));
});
