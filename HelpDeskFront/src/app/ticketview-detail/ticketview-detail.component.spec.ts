import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketviewDetailComponent } from './ticketview-detail.component';

describe('TicketviewDetailComponent', () => {
  let component: TicketviewDetailComponent;
  let fixture: ComponentFixture<TicketviewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketviewDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
