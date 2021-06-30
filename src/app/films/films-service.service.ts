import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Film } from "./models/film";

@Injectable()
export class FilmsService {
  public filmsWithFavoriteCount = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {}

  public async GetFilms() {
    return this.http.get("https://ghibliapi.herokuapp.com/films").toPromise();
  }
}
