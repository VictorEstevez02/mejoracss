import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosDellateComponent } from './usuarios-dellate.component';

describe('UsuariosDellateComponent', () => {
  let component: UsuariosDellateComponent;
  let fixture: ComponentFixture<UsuariosDellateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuariosDellateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosDellateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
