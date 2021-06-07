import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(public myHttp: HttpClient) { }

  arrayFilms: any
  searchInput: any
  searchList = [];
  rates=0
  arrayprova:any
  grande:any

  loadFilm() {
    this.myHttp.get('/assets/json/films.json')
      .subscribe(
        response => {this.arrayFilms = response },
        error => console.error('error: ' + JSON.stringify(error)),
        () => console.log('completed')
      )
  }
  

  searchFilm() {
    this.searchInput;
    this.searchList = []
    if (this.searchInput != undefined) {
      this.arrayFilms.forEach((film) => {
        if (film.Title.toUpperCase().indexOf(this.searchInput.toUpperCase()) > -1) {
          this.searchList.push(film);
        }
      });
    } else { this.searchList = [] }
  }
}

