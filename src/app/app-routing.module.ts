import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipListComponent } from './components/ships/ship.list.component';

const routes: Routes = [
  {path:'ships', component: ShipListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
