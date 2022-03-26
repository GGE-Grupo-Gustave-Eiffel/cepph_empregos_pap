import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInscritosComponent } from './pagina-inscritos.component';

describe('PaginaInscritosComponent', () => {
  let component: PaginaInscritosComponent;
  let fixture: ComponentFixture<PaginaInscritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaInscritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaInscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
