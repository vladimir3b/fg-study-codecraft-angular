import { Routes } from '@angular/router';

import { Chap04Subchap01Component } from './components/chap04-subchap01/chap04-subchap01.component';
import { Chap04Subchap02Component } from './components/chap04-subchap02/chap04-subchap02.component';
import { Chap04Subchap03Component } from './components/chap04-subchap03/chap04-subchap03.component';
import { Chap04Subchap04Component } from './components/chap04-subchap04/chap04-subchap04.component';



export const chap04Routes: Routes = [
  {
    path: 'chap04/subchap01',
    component: Chap04Subchap01Component
  },
  {
    path: 'chap04/subchap02',
    component: Chap04Subchap02Component
  },
  {
    path: 'chap04/subchap03',
    component: Chap04Subchap03Component
  },
  {
    path: 'chap04/subchap04',
    component: Chap04Subchap04Component
  }
]; 