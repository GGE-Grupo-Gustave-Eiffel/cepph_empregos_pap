import { TestBed } from '@angular/core/testing';

import { EnvioDadosService } from './envio-dados.service';

describe('EnvioDadosService', () => {
  let service: EnvioDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvioDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
