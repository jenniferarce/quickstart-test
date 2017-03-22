import{Router,RouterModule} from '@angular/router';

import{PhotosComponent} from './photos/photos.component';

import{PhotoDetailsComponent} from './photos/photo-details.component';

export const photosRouting = RouterModule.forChild([
    {path: 'photos', component: PhotosComponent},
    {path: 'photos/:id', component: PhotoDetailsComponent}
])