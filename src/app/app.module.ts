import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/home/home.component';
import { Url } from 'src/constants/url';
import { ShipsComponent } from 'src/ships/ship.component';
import { ShipListComponent } from 'src/ships/ship.list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ships', component: ShipsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShipsComponent,
    ShipListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  providers: [Url],
  bootstrap: [AppComponent]
})
export class AppModule { }
