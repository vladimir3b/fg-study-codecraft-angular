import { Routes } from '@angular/router';

import { Chap05Subchap01Component } from './components/chap05-subchap01/chap05-subchap01.component';
import { Chap05Subchap02Component } from './components/chap05-subchap02/chap05-subchap02.component';
import { Chap05Subchap03Component } from './components/chap05-subchap03/chap05-subchap03.component';
import { Chap05Subchap04Component } from './components/chap05-subchap04/chap05-subchap04.component';


export const chap05Routes: Routes = [
  {
    path: 'chap05/subchap01',
    component: Chap05Subchap01Component
  },
  {
    path: 'chap05/subchap02',
    component: Chap05Subchap02Component
  },
  {
    path: 'chap05/subchap03',
    component: Chap05Subchap03Component
  },
  {
    path: 'chap05/subchap04',
    component: Chap05Subchap04Component
  }
]; 