import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TicketView } from './ticket-view';

@Injectable({
  providedIn: 'root'
})
export class TicketViewService {

  getAll(cb: any){
    this.http.get<TicketView[]>('https://localhost:7047/tickets/view').subscribe(cb);
  }

  // I don't think we need this
  getOne(cb: any, id: number){
    this.http.get<TicketView>(`https://localhost:7047/tickets/${id}`).subscribe(cb);
  }

  constructor(private http: HttpClient) { }
}
