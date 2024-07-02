import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SocialMediaManagerComponent } from './social-media-manager/social-media-manager.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent, children: [
            {
                path: 'social-media-manager',
                component: SocialMediaManagerComponent
            }
        ]
    }
];