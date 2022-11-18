import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketViewListComponent } from './ticket-view-list.component';

describe('TicketViewListComponent', () => {
  let component: TicketViewListComponent;
  let fixture: ComponentFixture<TicketViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketViewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
