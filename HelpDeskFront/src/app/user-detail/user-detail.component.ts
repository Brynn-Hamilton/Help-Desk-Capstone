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

  // in hindsight - do we really care about being able to add, edit, or delete a user?
  // i think no, doesn't really make sense in a help desk setting

  turnOnEdit(){
    this.editObject.user_id = this.user.user_id;
    this.editObject.user_name = this.user.user_name;
    this.editObject.user_email = this.user.user_email;
    this.editMode = true;
  }

  saveChanges(){
    this.editObject.user_id = this.user.user_id;
    this.update.emit(this.editObject);
  }

  cancel(){

  }
}
