import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageWrapperComponent } from './home-page-wrapper.component';

describe('HomePageWrapperComponent', () => {
  let component: HomePageWrapperComponent;
  let fixture: ComponentFixture<HomePageWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
