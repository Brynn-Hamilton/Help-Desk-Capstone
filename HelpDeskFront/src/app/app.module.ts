import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketViewListComponent } from './ticket-view-list/ticket-view-list.component';
import { TicketviewDetailComponent } from './ticketview-detail/ticketview-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TicketviewEditComponent } from './ticketview-edit/ticketview-edit.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketViewListComponent,
    TicketviewDetailComponent,
    UserListComponent,
    UserDetailComponent,
    TicketviewEditComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
