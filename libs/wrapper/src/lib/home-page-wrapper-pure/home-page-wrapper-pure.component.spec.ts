import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageWrapperPureComponent } from './home-page-wrapper-pure.component';

describe('HomePageWrapperComponent', () => {
  let component: HomePageWrapperPureComponent;
  let fixture: ComponentFixture<HomePageWrapperPureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageWrapperPureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageWrapperPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
