import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowReadingComponent } from './now-reading.component';

describe('NowReadingComponent', () => {
  let component: NowReadingComponent;
  let fixture: ComponentFixture<NowReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
