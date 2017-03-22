import{Router,RouterModule} from '@angular/router';

import{HomeComponent} from './routers/home.component';
import{MessagesComponent} from './routers/messages/messages.component';
import{NotFoundComponent} from './routers/not-found.component';

export const routing = RouterModule.forRoot([
    {path : '', component: HomeComponent},
    {path: 'messages', component: MessagesComponent},
    {path: '**', component: NotFoundComponent}
])