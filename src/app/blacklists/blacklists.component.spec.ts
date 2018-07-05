import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistsComponent } from './blacklists.component';

describe('BlacklistsComponent', () => {
  let component: BlacklistsComponent;
  let fixture: ComponentFixture<BlacklistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlacklistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacklistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
