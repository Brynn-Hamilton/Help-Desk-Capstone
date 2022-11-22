import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  getOne(cb: any, id: any){
    this.http.get<Ticket>(`https://localhost:7047/tickets/${id}`).subscribe(cb);
  }

  add(cb: any, ticket: Ticket){
    this.http.post<Ticket>('https://localhost:7047/tickets', ticket).subscribe(cb);
  }

  delete(cb: any, id: number){
    this.http.delete(`https://localhost:7047/tickets/${id}`).subscribe(cb);
  }

  // is this right?
  update(cb: any, ticket: Ticket){
    this.http.put('https://localhost:7047/tickets', ticket).subscribe(cb);
  }

  constructor(private http: HttpClient) { }
}
