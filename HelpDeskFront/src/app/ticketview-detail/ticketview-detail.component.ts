import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TicketView } from '../ticket-view';

@Component({
  selector: 'app-ticketview-detail',
  templateUrl: './ticketview-detail.component.html',
  styleUrls: ['./ticketview-detail.component.css']
})
export class TicketviewDetailComponent implements OnInit {

  @Input() ticket: TicketView = {
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
  @Output() update: EventEmitter<TicketView> = new EventEmitter<TicketView>();

  detailsMode: boolean = false;
  editMode: boolean = false;
  editObject: TicketView = {
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
    resolution: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  turnOnEdit(){
   this.editObject.id = this.ticket.id;
   this.editObject.requester_id = this.ticket.requester_id;
   this.editObject.requester_name = this.ticket.requester_name;
   this.editObject.requester_email = this.ticket.requester_email;
   this.editObject.assignee_id = this.ticket.assignee_id;
   this.editObject.assignee_name = this.ticket.assignee_name;
   this.editObject.assignee_email = this.ticket.assignee_email;
   this.editObject.title = this.ticket.title;
   this.editObject.status = this.ticket.status;
   this.editObject.details = this.ticket.details;
   this.editObject.resolvedby_id = this.ticket.resolvedby_id;
   this.editObject.resolvedby_name = this.ticket.resolvedby_name;
   this.editObject.resolution = this.ticket.resolution;
   this.editMode = true;
   this.detailsMode = true;
  }

  deleteMe(){
    this.delete.emit(this.ticket.id);
  }

  saveChanges(){
    this.editObject.id = this.ticket.id;
    this.update.emit(this.editObject);
  }

  cancel(){
    this.editMode = false;
    this.detailsMode = false;
  }

}
