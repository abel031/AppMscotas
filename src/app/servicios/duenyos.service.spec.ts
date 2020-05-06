import { TestBed } from '@angular/core/testing';

import { DuenyosService } from './duenyos.service';

describe('DuenyosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DuenyosService = TestBed.get(DuenyosService);
    expect(service).toBeTruthy();
  });
});
