import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { TicketView } from '../ticket-view';
import { TicketViewService } from '../ticket-view.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  ticketviewList: TicketView[] = [];

  editTicket: Ticket = {
    ticket_id: 0, requester_id: 0, assignee_id: 0,
    subject_title: '', ticket_status: '', ticket_details: '',
    resolvedby_id: 0, ticket_resolution: ''
  };

  constructor(private TicketSrv: TicketService, private TicketViewSrv: TicketViewService ) {
    this.refresh();
   }

  ngOnInit(): void {
  }

  refresh(){
    this.TicketViewSrv.getAll(
      (result: TicketView[]) => {
        this.ticketviewList = result;
      }
    )
  }

  save(ticket: Ticket){
    this.TicketSrv.add(
      (result: Ticket) => {
        this.refresh();
      },
      ticket
    )
  }

  update(ticket: Ticket){
    this.TicketSrv.update(
      () => {
        this.refresh();
      },
      ticket
    )
  }

  delete(ticket_id: number){
    this.TicketSrv.delete(
      (result: Ticket) => {
        this.refresh();
      },
      ticket_id
    )
  }

  openTicket(id: number){
    this.TicketSrv.getOne(
      (result: Ticket) => {
        this.editTicket = result;
      },
      id
    )
  }

}
