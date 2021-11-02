import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInfoBoxComponent } from './product-info-box.component';

describe('ProductInfoBoxComponent', () => {
  let component: ProductInfoBoxComponent;
  let fixture: ComponentFixture<ProductInfoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInfoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
