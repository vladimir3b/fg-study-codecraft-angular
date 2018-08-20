import { Routes } from '@angular/router';

import { Chap15Subchap01Component } from './components/chap15-subchap01/chap15-subchap01.component';
import { Chap15Subchap02Component } from './components/chap15-subchap02/chap15-subchap02.component';
import { Chap15Subchap03Component } from './components/chap15-subchap03/chap15-subchap03.component';
import { Chap15Subchap04Component } from './components/chap15-subchap04/chap15-subchap04.component';
import { Chap15Subchap05Component } from './components/chap15-subchap05/chap15-subchap05.component';
import { Chap15Subchap06Component } from './components/chap15-subchap06/chap15-subchap06.component';
import { Chap15Subchap07Component } from './components/chap15-subchap07/chap15-subchap07.component';
import { Chap15Subchap08Component } from './components/chap15-subchap08/chap15-subchap08.component';


export const chap15Routes: Routes = [
  {
    path: 'chap15/subchap01',
    component: Chap15Subchap01Component
  },
  {
    path: 'chap15/subchap02',
    component: Chap15Subchap02Component
  },
  {
    path: 'chap15/subchap03',
    component: Chap15Subchap03Component
  },
  {
    path: 'chap15/subchap04',
    component: Chap15Subchap04Component
  },
  {
    path: 'chap15/subchap05',
    component: Chap15Subchap05Component
  },
  {
    path: 'chap15/subchap06',
    component: Chap15Subchap06Component
  },
  {
    path: 'chap15/subchap07',
    component: Chap15Subchap07Component
  },
  {
    path: 'chap15/subchap08',
    component: Chap15Subchap08Component
  }
]; 