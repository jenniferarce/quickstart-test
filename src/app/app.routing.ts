import{Router,RouterModule} from '@angular/router';

import{HomeComponent} from './routers/home.component';
import{PhotosComponent} from './routers/photos/photos.component';
import{MessagesComponent} from './routers/messages/messages.component';
import{NotFoundComponent} from './routers/not-found.component';

import{PhotoDetailsComponent} from './routers/photos/photo-details.component';

export const routing = RouterModule.forRoot([
    {path : '', component: HomeComponent},
    {path: 'messages', component: MessagesComponent},
    {path: 'photos', component: PhotosComponent},
    {path: 'photos/:id', component: PhotoDetailsComponent},
    {path: '**', component: NotFoundComponent}
])