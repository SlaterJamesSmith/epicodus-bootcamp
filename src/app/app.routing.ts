import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BrowseComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'videos/:id',
    component: VideoPlayerComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
