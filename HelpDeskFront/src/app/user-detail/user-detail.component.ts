import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: Users = {
    user_id: 0,
    user_name: '',
    user_email: ''
  };

  @Output() update: EventEmitter<Users> = new EventEmitter<Users>();

  editMode: boolean = false;
  editObject: Users = {
    user_id: 0,
    user_name: '',
    user_email: ''
  };

  constructor() { }

  ngOnInit(): void {
  }
}
