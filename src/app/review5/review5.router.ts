import { Routes } from '@angular/router';

import { Review5Subchap01Component } from './components/review5-subchap01/review5-subchap01.component';
import { Review5Subchap02Component } from './components/review5-subchap02/review5-subchap02.component';
import { Review5Subchap03Component } from './components/review5-subchap03/review5-subchap03.component';
import { Review5Subchap04Component } from './components/review5-subchap04/review5-subchap04.component';
import { Review5Subchap05Component } from './components/review5-subchap05/review5-subchap05.component';

export const review5Routes: Routes = [
  {
    path: 'review5/subchap01',
    component: Review5Subchap01Component
  },
  {
    path: 'review5/subchap02',
    component: Review5Subchap02Component
  },
  {
    path: 'review5/subchap03',
    component: Review5Subchap03Component
  },
  {
    path: 'review5/subchap04',
    component: Review5Subchap04Component
  },  
  {
    path: 'review5/subchap05',
    component: Review5Subchap05Component
  }
]; 