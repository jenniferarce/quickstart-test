import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

//routers
import { HomeComponent } from './routers/home.component';
import { NotFoundComponent } from './routers/not-found.component';
import { MessagesModule } from './routers/messages/messages.module'; 
import { PhotosModule } from './routers/photos/photos.module';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule,MessagesModule,PhotosModule],
  declarations: [AppComponent,HomeComponent,NotFoundComponent],
  bootstrap: [AppComponent]
})

export class AppModule { 

}

