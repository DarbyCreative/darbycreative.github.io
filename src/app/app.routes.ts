import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Members } from './members/members';
import { Ssid886477 } from './members/ssid886477/ssid886477';

export const routes: Routes = [
    {
        path: '', component: Home, title: 'Home Page'
    },
    {
        path: 'members', children: [
            {
                path: '', component: Members, title: 'Members'
            },
            {
                // path is set to your school id number
                // component is set to ssid{your school id} ex: ssid886477
                // title is what displays as the name of the tab in the browser

                path: '886477', component: Ssid886477, title: "Aidan's Profile"
            }
        ]
    },
];
