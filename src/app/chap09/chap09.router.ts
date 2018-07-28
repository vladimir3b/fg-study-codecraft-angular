import { Routes } from '@angular/router';

import { Chap09Subchap01Component } from './components/chap09-subchap01/chap09-subchap01.component';
import { Chap09Subchap02Component } from './components/chap09-subchap02/chap09-subchap02.component';
import { Chap09Subchap03Component } from './components/chap09-subchap03/chap09-subchap03.component';
import { Chap09Subchap04Component } from './components/chap09-subchap04/chap09-subchap04.component';
import { Chap09Subchap05Component } from './components/chap09-subchap05/chap09-subchap05.component';


export const chap09Routes: Routes = [
  {
    path: 'chap09/subchap01',
    component: Chap09Subchap01Component
  },
  {
    path: 'chap09/subchap02',
    component: Chap09Subchap02Component
  },
  {
    path: 'chap09/subchap03',
    component: Chap09Subchap03Component
  },
  {
    path: 'chap09/subchap04',
    component: Chap09Subchap04Component
  },
  {
    path: 'chap09/subchap05',
    component: Chap09Subchap05Component
  }
]; 