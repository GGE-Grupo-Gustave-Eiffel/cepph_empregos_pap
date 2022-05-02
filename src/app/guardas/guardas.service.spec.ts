import { TestBed } from '@angular/core/testing';

import { GuardasService } from './guardas.service';

describe('GuardasService', () => {
  let service: GuardasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
