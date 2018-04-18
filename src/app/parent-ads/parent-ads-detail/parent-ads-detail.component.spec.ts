import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAdsDetailComponent } from './parent-ads-detail.component';

describe('ParentAdsDetailComponent', () => {
  let component: ParentAdsDetailComponent;
  let fixture: ComponentFixture<ParentAdsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentAdsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentAdsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
