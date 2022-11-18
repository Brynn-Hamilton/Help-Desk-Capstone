import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketViewListComponent } from './ticket-view-list/ticket-view-list.component';
import { TicketviewDetailComponent } from './ticketview-detail/ticketview-detail.component';
import { TicketviewEditComponent } from './ticketview-edit/ticketview-edit.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path: 'ticket', component: TicketViewListComponent},
  {path: 'favorite', component: FavoritesComponent},
  {path: 'user', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 