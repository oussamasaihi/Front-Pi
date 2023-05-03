import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActivityComponent} from "./backoffice/activity/activity.component";
import {NewActivityComponent} from "./backoffice/new-activity/new-activity.component";
import {ReviewComponent} from "./backoffice/review/review.component";
import {ReclamationComponent} from "./backoffice/reclamation/reclamation.component";

const routes: Routes = [
  { path: 'activity', component: ActivityComponent},
  { path: 'NewActivity', component: NewActivityComponent},
  { path: 'review', component: ReviewComponent},
  { path: 'reclamation', component: ReclamationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
