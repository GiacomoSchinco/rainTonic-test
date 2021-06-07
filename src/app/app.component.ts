import { Component } from '@angular/core';
import { FilmService } from './services/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public serviceFilms:FilmService) { }

  title = 'rainTonic';


  ngOnInit(): void {
    this.serviceFilms.loadFilm()
  }
}
