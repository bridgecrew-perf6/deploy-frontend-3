import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesoftComponent } from './updatesoft.component';

describe('UpdatesoftComponent', () => {
  let component: UpdatesoftComponent;
  let fixture: ComponentFixture<UpdatesoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesoftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
