import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { Url } from 'src/constants/url';
import { ShipsComponent } from 'src/app/components/ships/ship.component';
import { ShipListComponent } from 'src/app/components/ships/ship.list.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movies/movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ships', component: ShipListComponent },
  { path: 'movies', component: MoviesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShipsComponent,
    ShipListComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  providers: [Url],
  bootstrap: [AppComponent]
})
export class AppModule { }
