import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {
  newTicket: Ticket = {
    ticket_id: 0, requester_id: 0, assignee_id: 0,
    subject_title: '', ticket_status: '', ticket_details: '',
    resolvedby_id: 0, ticket_resolution: ''
  };

  TheUsers: User[] = [];

  @Output() save: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor(private UserSrv: UserService) { 
    UserSrv.getAll(
      (result: User[]) => {
        this.TheUsers = result;
      }
    );
  }

  ngOnInit(): void {
  }

  saveIt(){
    this.save.emit(this.newTicket)
  }

  cancel(){
    
  }

}
