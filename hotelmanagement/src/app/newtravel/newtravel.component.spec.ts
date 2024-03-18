import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtravelComponent } from './newtravel.component';

describe('NewtravelComponent', () => {
  let component: NewtravelComponent;
  let fixture: ComponentFixture<NewtravelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewtravelComponent]
    });
    fixture = TestBed.createComponent(NewtravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
