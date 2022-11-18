import { Component, OnInit } from '@angular/core';
import { TicketViewService } from '../ticket-view.service';
import { TicketView } from '../ticket-view';

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
  constructor(private TicketSrv: TicketViewService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.TicketSrv.getAll(
      (result: TicketView[]) => {
        this.TheList = result;
      }
    )
  }

  showAddForm(){
    this.addMode = true;
  }

  addTicket(){
    let newTicket: TicketView = {
      id: 0,
      requester_id: 0,
      requester_name: this.newRequester_name,
      requester_email: '',
      assignee_id: 0,
      assignee_name: this.newRequester_name,
      assignee_email: '',
      title: this.newTitle,
      status: this.newStatus,
      details: this.newDetails,
      resolvedby_id: 0,
      resolvedby_name: this.newResolvedBy_name,
      resolution: this.newResolution
    }
     this.TicketSrv.add(
      (result: TicketView) => {
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
    this.TicketSrv.delete(
      () => {
        this.refresh()
      },
      id
    );
  }

updateOne(ticket: TicketView){
  this.TicketSrv.update(
    () => {

    },

    ticket
  );
}

}
