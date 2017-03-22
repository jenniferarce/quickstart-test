
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//routers
import { HomeComponent } from './routers/home.component';
import { NotFoundComponent } from './routers/not-found.component';
import { MessagesModule } from './routers/messages/messages.module';
import { PhotosModule } from './routers/photos/photos.module';

import { routing } from './app.routing';
import { photosRouting } from './routers/photos.routing';

//Authentication Guards
import { AuthService } from './authGuard/auth.service';
import { AuthGuard } from './authGuard/auth-guard.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, MessagesModule, PhotosModule, photosRouting, routing],
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})

export class AppModule {

}

