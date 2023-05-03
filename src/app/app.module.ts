import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './backoffice/sidebar/sidebar.component';
import { Page1Component } from './backoffice/page1/page1.component';
import { Page2Component } from './backoffice/page2/page2.component';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationFormComponent } from './backoffice/accomodation-form/accomodation-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './backoffice/sidenav/sidenav.component';
import { RoomsComponent } from './backoffice/rooms/rooms.component';
import { AddRoomComponent } from './backoffice/add-room/add-room.component';
import { HomeComponent } from './backoffice/home/home.component';
import { ActivityComponent } from './backoffice/activity/activity.component';
import { ReviewComponent } from './backoffice/review/review.component';
import { ReclamationComponent } from './backoffice/reclamation/reclamation.component';
import { NewActivityComponent } from './backoffice/new-activity/new-activity.component';



export const appRouteList: Routes = [
  {
      path: 'page1',
      component: Page1Component
  },
  {
      path: 'page2',
      component: Page2Component
  },
  {
    path:'Accomodation-form',
    component: AccomodationFormComponent
  },
  {
    path: 'rooms',
    component: RoomsComponent
  },
  {
    path: 'addroom',
    component: AddRoomComponent
  },
  {
      path: '**',
      redirectTo: 'page1'
  },
  {
    path : 'Activities',
    component: ActivityComponent
  },
  {
    path : 'NewActivity',
    component: NewActivityComponent
  },
  {
    path : 'review',
    component: ReviewComponent
  },
  {
    path : 'reclamation',
    component: ReclamationComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    Page1Component,
    Page2Component,
    AccomodationFormComponent,
    SidenavComponent,
    RoomsComponent,
    AddRoomComponent,
    HomeComponent,
    ActivityComponent,
    ReviewComponent,
    ReclamationComponent,
    NewActivityComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule.forRoot(appRouteList),
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
