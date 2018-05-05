import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';

const appRoutes: Routes = [
  {
    path: '',
    component: BrowseComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
