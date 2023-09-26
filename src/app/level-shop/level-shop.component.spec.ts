import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelShopComponent } from './level-shop.component';

describe('LevelShopComponent', () => {
  let component: LevelShopComponent;
  let fixture: ComponentFixture<LevelShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
