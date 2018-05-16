import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BrowseComponent
  },
  {
    path: 'videos/:id',
    component: VideoPlayerComponent
  },
  {
    path: 'search/:query',
    component: SearchComponent
  },
  {
    path: 'user/:username',
    component: UserComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
