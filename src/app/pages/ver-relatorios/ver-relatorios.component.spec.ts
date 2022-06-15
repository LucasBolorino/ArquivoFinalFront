import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRelatoriosComponent } from './ver-relatorios.component';

describe('VerRelatoriosComponent', () => {
  let component: VerRelatoriosComponent;
  let fixture: ComponentFixture<VerRelatoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerRelatoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerRelatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
