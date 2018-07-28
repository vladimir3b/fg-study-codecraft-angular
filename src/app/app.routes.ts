import { chap06Routes } from './chap06/chap06.router';
import { Routes, Route } from '@angular/router';

import { PageNotFoundComponent } from './others/components/page-not-found/page-not-found.component';
import { HomePageComponent } from './others/components/home-page/home-page.component';
import { Chap02RootComponent } from './chap02/components/chap02-root/chap02-root.component';
import { Chap02Subchap06Component } from './chap02/components/chap02-subchap06/chap02-subchap06.component';
import { chap02Routes } from './chap02/chap02.router';
import { chap04Routes } from './chap04/chap04.router';
import { Chap04RootComponent } from './chap04/components/chap04-root/chap04-root.component';
import { Chap05RootComponent } from './chap05/components/chap05-root/chap05-root.component';
import { chap05Routes } from './chap05/chap05.router';
import { Chap06RootComponent } from './chap06/components/chap06-root/chap06-root.component';
import { Chap07RootComponent } from './chap07/components/chap07-root/chap07-root.component';
import { Chap08RootComponent } from './chap08/components/chap08-root/chap08-root.component';
import { Chap09RootComponent } from './chap09/components/chap09-root/chap09-root.component';
import { Review1RootComponent } from './review1/components/review1-root/review1-root.component';
import { Review2RootComponent } from './review2/components/review2-root/review2-root.component';
import { Review3RootComponent } from './review3/components/review3-root/review3-root.component';
import { chap07Routes } from './chap07/chap07.router';
import { chap08Routes } from './chap08/chap08.router';
import { chap09Routes } from './chap09/chap09.router';
import { review1Routes } from './review1/review1.router';
import { review2Routes } from './review2/review2.router';
import { review3Routes } from './review3/review3.router';
import { Chap01RootComponent } from './chap01/components/chap01-root/chap01-root.component';
import { chap01Routes } from './chap01/chap01.router';


const rootRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'chap01',
    component: Chap01RootComponent
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
    path: 'chap05',
    component: Chap05RootComponent
  }, 
  {
    path: 'chap06',
    component: Chap06RootComponent
  },
  {
    path: 'chap07',
    component: Chap07RootComponent
  },
  {
    path: 'chap08',
    component: Chap08RootComponent
  },
  {
    path: 'chap09',
    component: Chap09RootComponent
  },
  {
    path: 'review1',
    component: Review1RootComponent
  },
  {
    path: 'review2',
    component: Review2RootComponent
  },
  {
    path: 'review3',
    component: Review3RootComponent
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

export const appRoutes: Routes = createRoutes(
  chap01Routes,
  chap02Routes, 
  chap04Routes,  
  chap05Routes,
  chap06Routes,
  chap07Routes,
  chap08Routes,
  chap09Routes,
  review1Routes,
  review2Routes,
  review3Routes,
  rootRoutes);

