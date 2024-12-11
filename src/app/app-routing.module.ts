import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertDetailsComponent } from './insert-details/insert-details.component';
import { DisplayAllDetailsComponent } from './display-all-details/display-all-details.component';

const routes: Routes = [
  {path:'',component:DisplayAllDetailsComponent},
  {path:'AllDetails',component:DisplayAllDetailsComponent},
  {path:'insertdb',component:InsertDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
