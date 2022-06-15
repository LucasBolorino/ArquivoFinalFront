import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioPiorAvaliacaoComponent } from './relatorio-pior-avaliacao.component';

describe('RelatorioPiorAvaliacaoComponent', () => {
  let component: RelatorioPiorAvaliacaoComponent;
  let fixture: ComponentFixture<RelatorioPiorAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatorioPiorAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioPiorAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
