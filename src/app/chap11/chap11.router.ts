import { Routes } from '@angular/router';

import { Chap11Subchap01Component } from './components/chap11-subchap01/chap11-subchap01.component';
import { Chap11Subchap02Component } from './components/chap11-subchap02/chap11-subchap02.component';
import { Chap11Subchap03Component } from './components/chap11-subchap03/chap11-subchap03.component';
import { Chap11Subchap04Component } from './components/chap11-subchap04/chap11-subchap04.component';


export const chap11Routes: Routes = [
  {
    path: 'chap11/subchap01',
    component: Chap11Subchap01Component
  },
  {
    path: 'chap11/subchap02',
    component: Chap11Subchap02Component
  },
  {
    path: 'chap11/subchap03',
    component: Chap11Subchap03Component
  },
  {
    path: 'chap11/subchap04',
    component: Chap11Subchap04Component
  }  
]; 