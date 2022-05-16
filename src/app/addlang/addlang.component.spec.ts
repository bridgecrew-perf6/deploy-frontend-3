import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlangComponent } from './addlang.component';

describe('AddlangComponent', () => {
  let component: AddlangComponent;
  let fixture: ComponentFixture<AddlangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
