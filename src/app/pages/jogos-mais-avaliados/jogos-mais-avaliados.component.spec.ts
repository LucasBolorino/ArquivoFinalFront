import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogosMaisAvaliadosComponent } from './jogos-mais-avaliados.component';

describe('JogosMaisAvaliadosComponent', () => {
  let component: JogosMaisAvaliadosComponent;
  let fixture: ComponentFixture<JogosMaisAvaliadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JogosMaisAvaliadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JogosMaisAvaliadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
