import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageCardComponent } from './product-page-card.component';

describe('ProductPageCardComponent', () => {
  let component: ProductPageCardComponent;
  let fixture: ComponentFixture<ProductPageCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPageCardComponent]
    });
    fixture = TestBed.createComponent(ProductPageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
