import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabysitterAdsItemComponent } from './babysitter-ads-item.component';

describe('BabysitterAdsItemComponent', () => {
  let component: BabysitterAdsItemComponent;
  let fixture: ComponentFixture<BabysitterAdsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabysitterAdsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabysitterAdsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
