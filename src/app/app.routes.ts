import { Routes, Route } from '@angular/router';

import { PageNotFoundComponent } from './others/components/page-not-found/page-not-found.component';
import { HomePageComponent } from './others/components/home-page/home-page.component';
import { Chap02RootComponent } from './chap02/components/chap02-root/chap02-root.component';
import { Chap02Subchap06Component } from './chap02/components/chap02-subchap06/chap02-subchap06.component';
import { chap02Routes } from './chap02/chap02.router';
import { chap04Routes } from './chap04/chap04.router';
import { Chap04RootComponent } from './chap04/components/chap04-root/chap04-root.component';


const rootRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'chap02',
    component: Chap02RootComponent
  }, 
  {
    path: 'chap04',
    component: Chap04RootComponent
  }, 
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

const createRoutes = (...routeArrays: Array<Routes>): Routes => {
  let finalRoutes: Routes = [];
  routeArrays.forEach((routes: Routes): void => {
    routes.forEach((route: Route): void => {
      finalRoutes.push(route);
    });  
  });
  // console.log(finalRoutes);
  return finalRoutes;
}

export const appRoutes: Routes = createRoutes(chap02Routes, chap04Routes, rootRoutes);

