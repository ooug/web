import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularBlogsComponent } from './popular-blogs.component';

describe('PopularBlogsComponent', () => {
  let component: PopularBlogsComponent;
  let fixture: ComponentFixture<PopularBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
