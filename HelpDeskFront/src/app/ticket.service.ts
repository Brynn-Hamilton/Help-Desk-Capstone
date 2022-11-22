import { Injectable } from '@angular/core';
import { Ticket } from './ticket';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  addTicket(cb: any, ticket: Ticket){
    this.http.post<Ticket>('https:/localhost:7047/tickets', ticket).subscribe(cb);
  }

  deleteTicket(cb: any, id: number){
    this.http.delete(`https://localhost:7047/tickets/${id}`).subscribe(cb);
  }

  updateTicket(cb: any, emp: Ticket){
    this.http.put('https://localhost:7047/tickets', emp).subscribe(cb);
  }
}
