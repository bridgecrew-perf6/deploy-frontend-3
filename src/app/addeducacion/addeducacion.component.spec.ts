import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeducacionComponent } from './addeducacion.component';

describe('AddeducacionComponent', () => {
  let component: AddeducacionComponent;
  let fixture: ComponentFixture<AddeducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
