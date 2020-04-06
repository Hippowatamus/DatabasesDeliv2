import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingsListComponent } from "./components/listings-list/listings-list.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'listings-list'},
  { path: 'listings-list', component: ListingsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
