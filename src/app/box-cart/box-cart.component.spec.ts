import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCartComponent } from './box-cart.component';

describe('BoxCartComponent', () => {
  let component: BoxCartComponent;
  let fixture: ComponentFixture<BoxCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
