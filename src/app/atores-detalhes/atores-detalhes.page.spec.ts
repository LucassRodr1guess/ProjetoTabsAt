import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AtoresDetalhesPage } from './atores-detalhes.page';

describe('AtoresDetalhesPage', () => {
  let component: AtoresDetalhesPage;
  let fixture: ComponentFixture<AtoresDetalhesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AtoresDetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
