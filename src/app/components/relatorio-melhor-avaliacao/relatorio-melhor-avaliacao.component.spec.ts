import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioMelhorAvaliacaoComponent } from './relatorio-melhor-avaliacao.component';

describe('RelatorioMelhorAvaliacaoComponent', () => {
  let component: RelatorioMelhorAvaliacaoComponent;
  let fixture: ComponentFixture<RelatorioMelhorAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioMelhorAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioMelhorAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
