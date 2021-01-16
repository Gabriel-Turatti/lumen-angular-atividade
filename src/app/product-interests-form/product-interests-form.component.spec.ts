import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInterestsFormComponent } from './product-interests-form.component';

describe('ProductInterestsFormComponent', () => {
  let component: ProductInterestsFormComponent;
  let fixture: ComponentFixture<ProductInterestsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInterestsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInterestsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
