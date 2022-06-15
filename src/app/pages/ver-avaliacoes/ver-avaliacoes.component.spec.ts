import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAvaliacoesComponent } from './ver-avaliacoes.component';

describe('VerAvaliacoesComponent', () => {
  let component: VerAvaliacoesComponent;
  let fixture: ComponentFixture<VerAvaliacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerAvaliacoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerAvaliacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
