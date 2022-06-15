import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilDadosComponent } from './perfil-dados.component';

describe('PerfilDadosComponent', () => {
  let component: PerfilDadosComponent;
  let fixture: ComponentFixture<PerfilDadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilDadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
