import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarJogosRecomendadosComponent } from './listar-jogos-recomendados.component';

describe('ListarJogosRecomendadosComponent', () => {
  let component: ListarJogosRecomendadosComponent;
  let fixture: ComponentFixture<ListarJogosRecomendadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarJogosRecomendadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarJogosRecomendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
