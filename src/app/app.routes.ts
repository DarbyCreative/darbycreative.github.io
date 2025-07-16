import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Members } from './members/members';

export const routes: Routes = [
    {
        path: '', component: Home, title: 'Home Page'
    },
    {
        path: 'members', component: Members, title: 'Our Members'
    }
];
