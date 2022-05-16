import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExpComponent } from './updateExp.component';

describe('EditComponent', () => {
  let component: UpdateExpComponent;
  let fixture: ComponentFixture<UpdateExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
