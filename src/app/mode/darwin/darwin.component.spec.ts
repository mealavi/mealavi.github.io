import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarwinComponent } from './darwin.component';

describe('DarwinComponent', () => {
  let component: DarwinComponent;
  let fixture: ComponentFixture<DarwinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarwinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
