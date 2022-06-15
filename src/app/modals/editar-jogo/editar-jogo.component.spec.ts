import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarJogoComponent } from './editar-jogo.component';

describe('EditarJogoComponent', () => {
  let component: EditarJogoComponent;
  let fixture: ComponentFixture<EditarJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarJogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
