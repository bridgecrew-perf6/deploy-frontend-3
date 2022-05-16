import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetecComponent } from './updatetec.component';

describe('UpdatetecComponent', () => {
  let component: UpdatetecComponent;
  let fixture: ComponentFixture<UpdatetecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatetecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
