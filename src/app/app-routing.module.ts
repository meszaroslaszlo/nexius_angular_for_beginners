import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersWithSearchTableComponent } from './users-with-search-table/users-with-search-table.component';

const routes: Routes = [
  { path: 'users', component: UsersWithSearchTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
