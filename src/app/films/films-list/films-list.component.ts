import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import { FilmsService } from '../films-service.service';
import { Film } from '../models/film';

export interface filmsWithFavoriteCount extends Film {
  added?: boolean;
  hidden?: boolean;
}

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css'],
})
export class FilmsListComponent implements OnInit {
  //@ViewChild('movieInfo') movieInfo: ElementRef;
  // @ViewChild('movie') movie: ElementRef;
  // @ViewChild('movieIn') movieInfo: ElementRef;
  films: Film[] = [];
  favoriteFilmsList: filmsWithFavoriteCount[] = [];
  favoritesCount = 0;
  durationInSeconds = 5;
  simple: any;
  hidden = true;

  constructor(
    private http: HttpClient,
    private filmsService: FilmsService,
    private snackBar: MatSnackBar,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.filmsService.GetFilms().then((res: any) => {
      this.films = [...res];
      this.filmsService.filmsWithFavoriteCount.next(
        this.films.map((x) => {
          return { ...x, added: false, hidden: true } as filmsWithFavoriteCount;
        })
      );

      this.favoriteFilmsList = this.filmsService.filmsWithFavoriteCount.value;

      console.log(this.favoriteFilmsList);
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message + ' was added');
  }

  addToFavorites(id: string) {
    const filmAdded = this.favoriteFilmsList.find((x) => x.id == id);
    //filmAdded.added = true;
    this.favoritesCount += 1;
  }

  removeFromFavorites(id: string) {
    const filmAdded = this.favoriteFilmsList.find((x) => x.id == id);
    //filmAdded.added = false;
    this.favoritesCount -= 1;
  }

  showMovieInfo(id: string): void {
    const filmHovered = this.favoriteFilmsList.find((x) => x.id == id);

    // if (filmHovered.hidden) {
    //   filmHovered.hidden = false;
    // } else {
    //   filmHovered.hidden = true;
    // }
  }

  hideMovieInfo(id: string) {
    const filmHovered = this.favoriteFilmsList.find((x) => x.id == id);
    //filmHovered.hidden = true;
  }

  checkOut() {
    this.dialog.open(DialogComponent, { data: '400px' });
  }
}
