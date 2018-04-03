import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAdsComponent } from './parent-ads.component';

describe('ParentAdsComponent', () => {
  let component: ParentAdsComponent;
  let fixture: ComponentFixture<ParentAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
