import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosInativosComponent } from './produtos-inativos.component';

describe('ProdutosInativosComponent', () => {
  let component: ProdutosInativosComponent;
  let fixture: ComponentFixture<ProdutosInativosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosInativosComponent]
    });
    fixture = TestBed.createComponent(ProdutosInativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
