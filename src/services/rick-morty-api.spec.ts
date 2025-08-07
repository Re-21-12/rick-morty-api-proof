import { TestBed } from '@angular/core/testing';

import { RickMortyApi } from './rick-morty-api';

describe('RickMortyApi', () => {
  let service: RickMortyApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickMortyApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
