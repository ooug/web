import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPassordComponent } from './forgot-passord.component';

describe('ForgotPassordComponent', () => {
  let component: ForgotPassordComponent;
  let fixture: ComponentFixture<ForgotPassordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPassordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPassordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
