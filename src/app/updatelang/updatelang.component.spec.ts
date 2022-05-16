import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelangComponent } from './updatelang.component';

describe('UpdatelangComponent', () => {
  let component: UpdatelangComponent;
  let fixture: ComponentFixture<UpdatelangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatelangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatelangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
