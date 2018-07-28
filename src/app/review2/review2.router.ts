import { Routes } from '@angular/router';

import { Review2Subchap01Component } from './components/review2-subchap01/review2-subchap01.component';
import { Review2Subchap02Component } from './components/review2-subchap02/review2-subchap02.component';
import { Review2Subchap03Component } from './components/review2-subchap03/review2-subchap03.component';

export const review2Routes: Routes = [
  {
    path: 'review2/subchap01',
    component: Review2Subchap01Component
  },
  {
    path: 'review2/subchap02',
    component: Review2Subchap02Component
  },
  {
    path: 'review2/subchap03',
    component: Review2Subchap03Component
  }
]; 