import { ComponentFixture, TestBed } from '@angular/core/testing';

import { One2oneComponent } from './one2one.component';

describe('One2oneComponent', () => {
  let component: One2oneComponent;
  let fixture: ComponentFixture<One2oneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ One2oneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(One2oneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
