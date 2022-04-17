import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCriacaoVagasComponent } from './pagina-criacao-vagas.component';

describe('PaginaCriacaoVagasComponent', () => {
  let component: PaginaCriacaoVagasComponent;
  let fixture: ComponentFixture<PaginaCriacaoVagasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaCriacaoVagasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCriacaoVagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
