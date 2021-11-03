import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductModalForComponent } from './product-modal-for.component';

describe('ProductModalForComponent', () => {
  let component: ProductModalForComponent;
  let fixture: ComponentFixture<ProductModalForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductModalForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductModalForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
