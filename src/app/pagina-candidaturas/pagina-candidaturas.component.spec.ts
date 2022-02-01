import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCandidaturasComponent } from './pagina-candidaturas.component';

describe('PaginaCandidaturasComponent', () => {
  let component: PaginaCandidaturasComponent;
  let fixture: ComponentFixture<PaginaCandidaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaCandidaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCandidaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
