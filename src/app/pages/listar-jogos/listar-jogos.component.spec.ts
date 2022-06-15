import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarJogosComponent } from './listar-jogos.component';

describe('ListarJogosComponent', () => {
  let component: ListarJogosComponent;
  let fixture: ComponentFixture<ListarJogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarJogosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
