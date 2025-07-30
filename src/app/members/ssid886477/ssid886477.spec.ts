import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ssid886477 } from './ssid886477';

describe('Ssid886477', () => {
  let component: Ssid886477;
  let fixture: ComponentFixture<Ssid886477>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ssid886477]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ssid886477);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
