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

  constructor(private http: HttpClient) { }
}
