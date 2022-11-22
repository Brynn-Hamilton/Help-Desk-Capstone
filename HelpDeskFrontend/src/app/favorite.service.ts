import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Favorite } from './favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  getAll(cb: any){
    this.http.get<Favorite[]>('https://localhost:7047/favorite').subscribe(cb);
  }

  add(cb: any, fav: Favorite){
    this.http.post<Favorite>('https://localhost:7047/favorite', fav).subscribe(cb);
  }

  //check these parameters against backend
  delete(cb: any, user_id: number, ticket_id: number){
    this.http.delete(`https://localhost:7047/favorite/${user_id}${ticket_id}`).subscribe(cb);
  }

  constructor(private http: HttpClient) { }
}
