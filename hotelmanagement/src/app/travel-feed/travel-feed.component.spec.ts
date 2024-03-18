import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelFeedComponent } from './travel-feed.component';

describe('TravelFeedComponent', () => {
  let component: TravelFeedComponent;
  let fixture: ComponentFixture<TravelFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelFeedComponent]
    });
    fixture = TestBed.createComponent(TravelFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
