import { Routes } from '@angular/router';

import { Chap02Subchap03Component } from './components/chap02-subchap03/chap02-subchap03.component';
import { Chap02Subchap04Component } from './components/chap02-subchap04/chap02-subchap04.component';
import { Chap02Subchap06Component } from './components/chap02-subchap06/chap02-subchap06.component';
import { Chap02Subchap07Component } from './components/chap02-subchap07/chap02-subchap07.component';
import { Chap02Subchap08Component } from './components/chap02-subchap08/chap02-subchap08.component';
import { Chap02Subchap09Component } from './components/chap02-subchap09/chap02-subchap09.component';
import { Chap02Subchap05Component } from './components/chap02-subchap05/chap02-subchap05.component';
import { Chap02Subchap01Component } from './components/chap02-subchap01/chap02-subchap01.component';
import { Chap02Subchap02Component } from './components/chap02-subchap02/chap02-subchap02.component';


export const chap02Routes: Routes = [
  {
    path: 'chap02/subchap01',
    component: Chap02Subchap01Component
  },
  {
    path: 'chap02/subchap02',
    component: Chap02Subchap02Component
  },
  {
    path: 'chap02/subchap03',
    component: Chap02Subchap03Component
  },
  {
    path: 'chap02/subchap04',
    component: Chap02Subchap04Component
  },
  {
    path: 'chap02/subchap05',
    component: Chap02Subchap05Component
  },
  {
    path: 'chap02/subchap06',
    component: Chap02Subchap06Component
  },
  {
    path: 'chap02/subchap07',
    component: Chap02Subchap07Component
  },
  {
    path: 'chap02/subchap08',
    component: Chap02Subchap08Component
  },
  {
    path: 'chap02/subchap09',
    component: Chap02Subchap09Component
  }
]; 