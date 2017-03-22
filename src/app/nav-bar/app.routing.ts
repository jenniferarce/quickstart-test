import { Router, RouterModule} from '@angular/router';

import { NgProjectComponent } from './components/ngProject.component';
import {UsersComponent} from './components/users.component';
import {NotFoundComponent} from './components/not-found.component';
import {PostsComponent} from './components/posts.component';

export const routingNgProject = RouterModule.forRoot([
    { path: '', component: NgProjectComponent },
    { path: 'users', component: UsersComponent },
    { path: 'posts', component: PostsComponent },
    { path: '**', component: NotFoundComponent}
])