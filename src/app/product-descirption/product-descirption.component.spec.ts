import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDescirptionComponent } from './product-descirption.component';

describe('ProductDescirptionComponent', () => {
  let component: ProductDescirptionComponent;
  let fixture: ComponentFixture<ProductDescirptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDescirptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDescirptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
