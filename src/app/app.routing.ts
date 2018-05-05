import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BrowseComponent
  },
  {
    path: 'videos/:id',
    component: VideoPlayerComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
