import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusesPageComponent } from './buses-page/buses-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BusesListComponent } from './buses-list/buses-list.component';



@NgModule({
  declarations: [
    BusesPageComponent,
    BusesListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule

  ]
})
export class BusesModule { }
