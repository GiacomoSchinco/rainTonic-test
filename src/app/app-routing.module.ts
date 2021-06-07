import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmComponent } from './component/film/film.component';
import { SearchComponent } from './component/search/search.component';

const routes: Routes = [
  { path: '', component: FilmComponent },
  { path: 'search', component: SearchComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
