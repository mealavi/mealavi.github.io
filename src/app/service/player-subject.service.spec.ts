import { TestBed } from '@angular/core/testing';

import { PlayerSubjectService } from './player-subject.service';

describe('PlayerSubjectService', () => {
  let service: PlayerSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
