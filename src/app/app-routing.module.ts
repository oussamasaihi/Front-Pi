import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActivityComponent} from "./backoffice/activity/activity.component";
import {NewActivityComponent} from "./backoffice/new-activity/new-activity.component";

const routes: Routes = [
  { path: 'activity', component: ActivityComponent},
  { path: 'NewActivity', component: NewActivityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
