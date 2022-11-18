import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketviewEditComponent } from './ticketview-edit.component';

describe('TicketviewEditComponent', () => {
  let component: TicketviewEditComponent;
  let fixture: ComponentFixture<TicketviewEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketviewEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketviewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
