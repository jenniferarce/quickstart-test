import { HttpModule, JsonpModule } from '@angular/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import{routingNgProject} from './nav-bar/app.routing';
import{NavBarComponent} from './nav-bar/navBar.component';
import {NgProjectComponent} from './nav-bar/components/ngProject.component';
import {UsersComponent} from './nav-bar/components/users.component';
import{NotFoundComponent} from './nav-bar/components/not-found.component';
import {PostsComponent} from './nav-bar/components/posts.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,HttpModule,JsonpModule,routingNgProject],
  declarations: [AppComponent,NavBarComponent,NgProjectComponent,UsersComponent,NotFoundComponent,PostsComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}