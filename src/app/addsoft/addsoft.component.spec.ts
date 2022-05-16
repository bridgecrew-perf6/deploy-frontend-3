import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsoftComponent } from './addsoft.component';

describe('AddsoftComponent', () => {
  let component: AddsoftComponent;
  let fixture: ComponentFixture<AddsoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsoftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
