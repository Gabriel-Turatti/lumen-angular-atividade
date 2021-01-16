import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInterestsListComponent } from './product-interests-list.component';

describe('ProductInterestsListComponent', () => {
  let component: ProductInterestsListComponent;
  let fixture: ComponentFixture<ProductInterestsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInterestsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInterestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
