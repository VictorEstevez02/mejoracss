import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosFilterComponent } from './usuarios-filter.component';

describe('UsuariosFilterComponent', () => {
  let component: UsuariosFilterComponent;
  let fixture: ComponentFixture<UsuariosFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
