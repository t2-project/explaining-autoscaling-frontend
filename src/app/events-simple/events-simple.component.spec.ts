import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSimpleComponent } from './events-simple.component';

describe('EventsSimpleComponent', () => {
  let component: EventsSimpleComponent;
  let fixture: ComponentFixture<EventsSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
