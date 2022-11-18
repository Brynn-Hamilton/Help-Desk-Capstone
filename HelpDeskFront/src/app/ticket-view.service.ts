import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TicketView } from './ticket-view';

@Injectable({
  providedIn: 'root'
})
export class TicketViewService {

  getAll(cb: any){
    this.http.get<TicketView[]>('https://localhost:7047/tickets').subscribe(cb);
  }

  getOne(cb: any, id: number){
    this.http.get<TicketView>(`https://localhost:7047/tickets/${id}`).subscribe(cb);
  }

  add(cb: any, emp: TicketView){
    this.http.post<TicketView>('https://localhost:7047/tickets', emp).subscribe(cb);
  }

  delete(cb: any, id: number){
    this.http.delete(`https://localhost:7047/tickets/${id}`).subscribe(cb);
  }

  update(cb: any, emp: TicketView){
    this.http.put('https://localhost:7047/tickets', emp).subscribe(cb);
  }

  constructor(private http: HttpClient) { }
}
