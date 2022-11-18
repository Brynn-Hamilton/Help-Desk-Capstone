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

}
