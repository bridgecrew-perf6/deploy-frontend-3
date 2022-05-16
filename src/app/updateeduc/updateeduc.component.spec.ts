import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateeducComponent } from './updateeduc.component';

describe('UpdateeducComponent', () => {
  let component: UpdateeducComponent;
  let fixture: ComponentFixture<UpdateeducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateeducComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateeducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
