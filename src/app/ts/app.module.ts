import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavBarComponent } from './nav-bar.component'
import { HeaderComponent } from './header.component';
import { AddBookComponent } from './add-book.component';
import { RequestBookComponent } from './request-book.component';
import { LatestBooksComponent } from './latest-books.component';

const appRoutes: Routes = [
  {
    path: "home",
    component: LatestBooksComponent
  },
  {
    path: "addbook",
    component: AddBookComponent
  },
  {
    path:"bookrequest",
    component: RequestBookComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  }
]

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
    ],
  declarations: [ 
    AppComponent, 
    NavBarComponent, 
    HeaderComponent,
    AddBookComponent,
    RequestBookComponent,
    LatestBooksComponent
    ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
