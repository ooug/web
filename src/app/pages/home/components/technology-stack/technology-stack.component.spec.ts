import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyStackComponent } from './technology-stack.component';

describe('TechnologyStackComponent', () => {
  let component: TechnologyStackComponent;
  let fixture: ComponentFixture<TechnologyStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
