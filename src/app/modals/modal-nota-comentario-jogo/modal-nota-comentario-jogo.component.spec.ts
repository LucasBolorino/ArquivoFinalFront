import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNotaComentarioJogoComponent } from './modal-nota-comentario-jogo.component';

describe('ModalNotaComentarioJogoComponent', () => {
  let component: ModalNotaComentarioJogoComponent;
  let fixture: ComponentFixture<ModalNotaComentarioJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNotaComentarioJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNotaComentarioJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
