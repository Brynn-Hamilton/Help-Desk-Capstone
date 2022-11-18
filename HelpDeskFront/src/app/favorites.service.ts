import { Injectable } from '@angular/core';
import { Favorites } from './favorites';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  getAll(cb: any){
    this.http.get<Favorites[]>('https://localhost:7047/favorites').subscribe(cb);
  }

  add(cb: any, emp: Favorites){
    this.http.post<Favorites>('https://localhost:7047/favorites', emp).subscribe(cb);
  }

  delete(cb: any, id: number){
    // how to handle multiple params? we have 2 ideas to match for deleting
    this.http.delete(`https://localhost:7047/favorites/${id}`).subscribe(cb);
  }

  constructor(private http: HttpClient) { }
}
