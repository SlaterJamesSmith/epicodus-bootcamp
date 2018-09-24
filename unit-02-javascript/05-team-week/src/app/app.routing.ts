import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import { ToolInfoComponent } from './tool-info/tool-info.component';


const appRoutes: Routes = [
  {
    path: '',
    component: ToolListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
