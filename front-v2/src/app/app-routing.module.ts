import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusesPageComponent } from './UI/buses/buses-page/buses-page.component';
import { BusesListComponent } from './UI/buses/buses-list/buses-list.component';

const routes: Routes = [
  {path: '', component: BusesPageComponent},
  {path: 'list', component: BusesListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {}
}
