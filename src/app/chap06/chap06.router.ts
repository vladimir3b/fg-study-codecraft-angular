import { Routes } from '@angular/router';

import { Chap06Subchap01Component } from './components/chap06-subchap01/chap06-subchap01.component';
import { Chap06Subchap02Component } from './components/chap06-subchap02/chap06-subchap02.component';
import { Chap06Subchap03Component } from './components/chap06-subchap03/chap06-subchap03.component';

export const chap06Routes: Routes = [
  {
    path: 'chap06/subchap01',
    component: Chap06Subchap01Component
  },
  {
    path: 'chap06/subchap02',
    component: Chap06Subchap02Component
  },
  {
    path: 'chap06/subchap03',
    component: Chap06Subchap03Component
  }
]; 