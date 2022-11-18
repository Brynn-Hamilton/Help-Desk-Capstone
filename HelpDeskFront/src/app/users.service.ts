import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  getAll(cb: any){
    this.http.get<Users[]>('https://localhost:7047/user').subscribe(cb);
  }

  getOne(cb: any, id: number){
    this.http.get<Users>(`https://localhost:7047/user/${id}`).subscribe(cb);
  }

  add(cb: any, emp: Users){
    this.http.post<Users>('https://localhost:7047/user', emp).subscribe(cb);
  }

  update(cb: any, emp: Users){
    this.http.put('https://localhost:7047/user', emp).subscribe(cb);
  }
  constructor(private http: HttpClient) { }
}
