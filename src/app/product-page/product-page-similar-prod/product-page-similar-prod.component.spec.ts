import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageSimilarProdComponent } from './product-page-similar-prod.component';

describe('ProductPageSimilarProdComponent', () => {
  let component: ProductPageSimilarProdComponent;
  let fixture: ComponentFixture<ProductPageSimilarProdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPageSimilarProdComponent]
    });
    fixture = TestBed.createComponent(ProductPageSimilarProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
