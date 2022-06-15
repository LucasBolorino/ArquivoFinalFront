import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasMaisAvaliadasComponent } from './categorias-mais-avaliadas.component';

describe('CategoriasMaisAvaliadasComponent', () => {
  let component: CategoriasMaisAvaliadasComponent;
  let fixture: ComponentFixture<CategoriasMaisAvaliadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasMaisAvaliadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasMaisAvaliadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
