import { Routes } from '@angular/router';

import { Review3Subchap01Component } from './components/review3-subchap01/review3-subchap01.component';
import { Review3Subchap02Component } from './components/review3-subchap02/review3-subchap02.component';
import { Review3Subchap03Component } from './components/review3-subchap03/review3-subchap03.component';
import { Review3Subchap04Component } from './components/review3-subchap04/review3-subchap04.component';

export const review3Routes: Routes = [
  {
    path: 'review3/subchap01',
    component: Review3Subchap01Component
  },
  {
    path: 'review3/subchap02',
    component: Review3Subchap02Component
  },
  {
    path: 'review3/subchap03',
    component: Review3Subchap03Component
  },
  {
    path: 'review3/subchap04',
    component: Review3Subchap04Component
  }
]; 