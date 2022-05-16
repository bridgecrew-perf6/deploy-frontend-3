import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTecComponent } from './add-tec.component';

describe('AddTecComponent', () => {
  let component: AddTecComponent;
  let fixture: ComponentFixture<AddTecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
