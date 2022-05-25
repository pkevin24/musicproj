import { TestBed } from '@angular/core/testing';

import { SongdetService } from './songdet.service';

describe('SongdetService', () => {
  let service: SongdetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongdetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
