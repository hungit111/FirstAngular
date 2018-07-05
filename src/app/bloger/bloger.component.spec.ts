import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogerComponent } from './bloger.component';

describe('BlogerComponent', () => {
  let component: BlogerComponent;
  let fixture: ComponentFixture<BlogerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
