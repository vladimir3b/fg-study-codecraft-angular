import { Routes } from '@angular/router';

import { Review4Subchap01Component } from './components/review4-subchap01/review4-subchap01.component';
import { Review4Subchap02Component } from './components/review4-subchap02/review4-subchap02.component';
import { Review4Subchap03Component } from './components/review4-subchap03/review4-subchap03.component';
import { Review4Subchap04Component } from './components/review4-subchap04/review4-subchap04.component';
import { Review4Subchap05Component } from './components/review4-subchap05/review4-subchap05.component';


export const review4Routes: Routes = [
  {
    path: 'review4/subchap01',
    component: Review4Subchap01Component
  },
  {
    path: 'review4/subchap02',
    component: Review4Subchap02Component
  },
  {
    path: 'review4/subchap03',
    component: Review4Subchap03Component
  },
  {
    path: 'review4/subchap04',
    component: Review4Subchap04Component
  },
  {
    path: 'review4/subchap05',
    component: Review4Subchap05Component
  }
]; 