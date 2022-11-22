import { Component } from '@angular/core';
import { Ticket } from './ticket';
import { Users } from './users';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTicket: Ticket = {
    ticket_id: 0, requester_id: 0, assignee_id: 0,
    subject_title: '', ticket_status: '', ticket_details: '',
    resolvedby_id: 0, ticket_resolution: ''
  };

  title = 'HelpDeskFront';

  TheUsers: Users[] = [];

  constructor(private UserSrv: UsersService){
    UserSrv.getAll(
      (result: Users[]) => {
        this.TheUsers = result
      }
    );
  }
}
