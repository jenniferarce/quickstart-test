
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
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,routingNgProject],
  declarations: [AppComponent,NavBarComponent,NgProjectComponent,UsersComponent,NotFoundComponent,PostsComponent],
  bootstrap: [AppComponent]
})

export class AppModule {

}


//routers
//import { HomeComponent } from './routers/home.component';
//import { NotFoundComponent } from './routers/not-found.component';
//import { MessagesModule } from './routers/messages/messages.module';
//import { PhotosModule } from './routers/photos/photos.module';

//import { routing } from './app.routing';
//import { photosRouting } from './routers/photos.routing';

//Authentication Guards
//import { AuthService } from './authGuard/auth.service';
//import { AuthGuard } from './authGuard/auth-guard.service';


//imports:
//, MessagesModule, PhotosModule, photosRouting, routing

//declarations:
//, HomeComponent, NotFoundComponent

 //providers: //providers: [AuthGuard,AuthService],