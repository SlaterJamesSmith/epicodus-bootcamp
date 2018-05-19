import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PublicComponent
  },
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [AuthGuardService]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
