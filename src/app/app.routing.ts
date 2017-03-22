import { Router, RouterModule, CanActivate } from '@angular/router';

import { HomeComponent } from './routers/home.component';
import { MessagesComponent } from './routers/messages/messages.component';
import { NotFoundComponent } from './routers/not-found.component';

import { AuthGuard } from './authguard/auth-guard.service';

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'messages', component: MessagesComponent }, //, canActivate:[AuthGuard]
    { path: '**', component: NotFoundComponent }
])