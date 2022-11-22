import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TicketView } from '../ticket-view';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticketview-detail',
  templateUrl: './ticketview-detail.component.html',
  styleUrls: ['./ticketview-detail.component.css']
})
export class TicketviewDetailComponent implements OnInit {

  @Input() ticket: Ticket = {
    ticket_id: 0,
    requester_id: 0,
    assignee_id: 0,
    subject_title: '',
    ticket_status: '',
    ticket_details: '',
    resolvedby_id: 0,
    ticket_resolution: ''
  };

  @Input() ticketDisplay: TicketView = {
    id: 0,
    requester_id: 0,
    requester_name: '',
    requester_email: '',
    assignee_id: 0,
    assignee_name: '',
    assignee_email: '',
    title: '',
    status: '',
    details: '',
    resolvedby_id: 0,
    resolvedby_name: '',
    resolution: ''
  };

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() update: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  detailsMode: boolean = false;
  editMode: boolean = false;
  editObject: Ticket = {
    ticket_id: 0,
    requester_id: 0,
    assignee_id: 0,
    subject_title: '',
    ticket_status: '',
    ticket_details: '',
    resolvedby_id: 0,
    ticket_resolution: ''
  };

  TheUsers: Users[] = [];

  constructor(private UserSrv: UsersService, private TicketSrv: TicketService){ 
    UserSrv.getAll(
      (result: Users[]) => {
        this.TheUsers = result
      }
    );
  }
    
  ngOnInit(): void {
  }

  viewDetails(){
    this.detailsMode = true;
  }
  turnOnEdit(){
   this.editObject.ticket_id = this.ticket.ticket_id;
   this.editObject.requester_id = this.ticket.requester_id;
   this.editObject.assignee_id = this.ticket.assignee_id;
   this.editObject.subject_title = this.ticket.subject_title;
   this.editObject.ticket_status = this.ticket.ticket_status;
   this.editObject.ticket_details = this.ticket.ticket_details;
   this.editObject.resolvedby_id = this.ticket.resolvedby_id;
   this.editObject.ticket_resolution = this.ticket.ticket_resolution;
   this.editMode = true;
   this.detailsMode = false;
  }

  deleteMe(){
    this.delete.emit(this.ticket.ticket_id);
  }

  saveChanges(){
    this.editObject.ticket_id = this.ticket.ticket_id;
    this.update.emit(this.editObject);
  }

  cancel(){
    this.editMode = false;
    this.detailsMode = false;
  }
}


