import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLevelShopComponent } from './form-level-shop.component';

describe('FormLevelShopComponent', () => {
  let component: FormLevelShopComponent;
  let fixture: ComponentFixture<FormLevelShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLevelShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLevelShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
