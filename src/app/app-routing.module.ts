import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ItemDetailsComponent } from './component/item-details/item-details.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'itemdetails/:id', component: ItemDetailsComponent},
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
