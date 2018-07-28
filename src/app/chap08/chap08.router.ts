import { Routes } from '@angular/router';

import { Chap08Subchap01Component } from './components/chap08-subchap01/chap08-subchap01.component';
import { Chap08Subchap02Component } from './components/chap08-subchap02/chap08-subchap02.component';
import { Chap08Subchap03Component } from './components/chap08-subchap03/chap08-subchap03.component';

export const chap08Routes: Routes = [
  {
    path: 'chap08/subchap01',
    component: Chap08Subchap01Component
  },
  {
    path: 'chap08/subchap02',
    component: Chap08Subchap02Component
  },
  {
    path: 'chap08/subchap03',
    component: Chap08Subchap03Component
  }
]; 