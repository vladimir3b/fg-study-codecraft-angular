import { Routes } from '@angular/router';

import { Chap10Subchap01Component } from './components/chap10-subchap01/chap10-subchap01.component';
import { Chap10Subchap02Component } from './components/chap10-subchap02/chap10-subchap02.component';
import { Chap10Subchap03Component } from './components/chap10-subchap03/chap10-subchap03.component';
import { Chap10Subchap04Component } from './components/chap10-subchap04/chap10-subchap04.component';
import { Chap10Subchap05Component } from './components/chap10-subchap05/chap10-subchap05.component';


export const chap10Routes: Routes = [
  {
    path: 'chap10/subchap01',
    component: Chap10Subchap01Component
  },
  {
    path: 'chap10/subchap02',
    component: Chap10Subchap02Component
  },
  {
    path: 'chap10/subchap03',
    component: Chap10Subchap03Component
  },
  {
    path: 'chap10/subchap04',
    component: Chap10Subchap04Component
  },
  {
    path: 'chap10/subchap05',
    component: Chap10Subchap05Component
  },
]; 