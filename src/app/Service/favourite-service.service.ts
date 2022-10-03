import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FavouriteModel } from '../Model/FavouriteModel';

@Injectable({
  providedIn: 'root'
})
export class FavouriteServiceService {

  url = 'http://localhost:8080/test/favourite';
  items: any = [];

  constructor(private http:HttpClient) { }

  createFavourite(favourite:FavouriteModel) {

    return this.http.post<FavouriteModel>(this.url, favourite);
  }

  deleteFavourite(favourite:FavouriteModel) {
    return this.http.delete<FavouriteModel>(this.url + "/" + favourite.id);
  }

  getFavouriteByUserId(id: Number): Observable<any> {
    return this.http.get<FavouriteModel>(this.url + "/" + id);
  }
}
