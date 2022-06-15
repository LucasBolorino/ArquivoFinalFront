import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoAvaliacaoComponent } from './jogo-avaliacao.component';

describe('JogoAvaliacaoComponent', () => {
  let component: JogoAvaliacaoComponent;
  let fixture: ComponentFixture<JogoAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogoAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
