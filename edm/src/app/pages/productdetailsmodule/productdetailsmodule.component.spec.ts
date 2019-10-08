import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailsmoduleComponent } from './productdetailsmodule.component';

describe('ProductdetailsmoduleComponent', () => {
  let component: ProductdetailsmoduleComponent;
  let fixture: ComponentFixture<ProductdetailsmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdetailsmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailsmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
