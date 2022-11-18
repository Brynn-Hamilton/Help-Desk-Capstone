import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  UserList: Users[] = [];
  constructor(private UserSrv: UsersService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.UserSrv.getAll(
      (result: Users[]) => {
        this.UserList = result;
      }
    )
  }
  
updateOne(ticket: Users){
  this.UserSrv.update(
    () => {

    },

    ticket
  );
}

}
