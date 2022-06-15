import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrosMaisAvaliaramComponent } from './membros-mais-avaliaram.component';

describe('MembrosMaisAvaliaramComponent', () => {
  let component: MembrosMaisAvaliaramComponent;
  let fixture: ComponentFixture<MembrosMaisAvaliaramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembrosMaisAvaliaramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembrosMaisAvaliaramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
