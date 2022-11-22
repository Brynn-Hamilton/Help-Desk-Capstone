import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  @Input() editTicket: Ticket = {
    ticket_id: 0, requester_id: 0, assignee_id: 0,
    subject_title: '', ticket_status: '', ticket_details: '',
    resolvedby_id: 0, ticket_resolution: ''
  };
  editMode: boolean = false;
  detailMode: boolean = false;
  
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
    this.save.emit(this.editTicket);
  }

}
