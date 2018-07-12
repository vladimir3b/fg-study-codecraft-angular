import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './others/components/page-not-found/page-not-found.component';
import { HomePageComponent } from './others/components/home-page/home-page.component';
import { Chap02RootComponent } from './chap02/components/chap02-root/chap02-root.component';
import { Chap02Subchap06Component } from './chap02/components/chap02-subchap06/chap02-subchap06.component';
import { chap02Routes } from './chap02/chap02.router';


const rootRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'chap02',
    component: Chap02Subchap06Component
  }, 
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

 export const appRoutes: Routes = chap02Routes.concat(rootRoutes);

