import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprojComponent } from './updateproj.component';

describe('UpdateprojComponent', () => {
  let component: UpdateprojComponent;
  let fixture: ComponentFixture<UpdateprojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateprojComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateprojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
