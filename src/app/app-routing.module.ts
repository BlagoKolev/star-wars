import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ShipListComponent } from './components/ships/ship.list.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'ships', component: ShipListComponent },
  // { path: 'movies', component: MoviesComponent },
  // { path: 'characters', component: CharactersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
