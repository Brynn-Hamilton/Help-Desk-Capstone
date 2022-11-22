import { Component, OnInit } from '@angular/core';
import { TicketViewService } from '../ticket-view.service';
import { TicketView } from '../ticket-view';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-view-list',
  templateUrl: './ticket-view-list.component.html',
  styleUrls: ['./ticket-view-list.component.css']
})
export class TicketViewListComponent implements OnInit {
  TheList: TicketView[] = [];
  newTicket_id = 0;
  newRequester_id = 0;
  newRequester_name = '';
  newRequester_email = '';
  newAssignee_id = 0;
  newAssignee_name = '';
  newAssignee_email = '';
  newTitle = '';
  newStatus = '';
  newDetails = '';
  newResolvedBy_id = 0;
  newResolvedBy_name = '';
  newResolution = '';

  
  addMode: boolean = false;

 TheUsers: Users[] = [];

  constructor(private TicketViewSrv: TicketViewService, private UserSrv: UsersService, private TicketSrv: TicketService ) { 

  UserSrv.getAll(
    (result: Users[]) => {
      this.TheUsers = result
    }
  );
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.TicketViewSrv.getAll(
      (result: TicketView[]) => {
        this.TheList = result;
      }
    )
  }

  showAddForm(){
    this.addMode = true;
  }

  addTicket(){
    let newTicket: Ticket = {
      ticket_id: 0,
      requester_id: 0,
      assignee_id: 0,
      subject_title: this.newTitle,
      ticket_status: this.newStatus,
      ticket_details: this.newDetails,
      resolvedby_id: 0,
      ticket_resolution: this.newResolution
    }
     this.TicketSrv.addTicket(
      (result: Ticket) => {
        this.refresh();
      },
      newTicket
     );

    this.newRequester_name;
    this.newRequester_name;
    this.newTitle;
    this.newStatus;
    this.newDetails;
    this.newResolvedBy_name;
    this.newResolution;

    this.addMode = true;
  }

  cancelTicket(){
    this.addMode = false;
  }
  
  deleteOne(id: number){
    this.TicketSrv.deleteTicket(
      () => {
        this.refresh()
      },
      id
    );
  }

updateOne(ticket: Ticket){
  this.TicketSrv.updateTicket(
    () => {

    },

    ticket
  );
}

}
