import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesForComponent } from './categories-for.component';

describe('CategoriesForComponent', () => {
  let component: CategoriesForComponent;
  let fixture: ComponentFixture<CategoriesForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
