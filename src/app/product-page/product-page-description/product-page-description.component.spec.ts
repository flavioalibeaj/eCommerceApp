import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageDescriptionComponent } from './product-page-description.component';

describe('ProductPageDescriptionComponent', () => {
  let component: ProductPageDescriptionComponent;
  let fixture: ComponentFixture<ProductPageDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductPageDescriptionComponent]
    });
    fixture = TestBed.createComponent(ProductPageDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
