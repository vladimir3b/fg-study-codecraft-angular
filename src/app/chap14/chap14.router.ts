import { Routes } from '@angular/router';

import { Chap14Subchap01Component } from './components/chap14-subchap01/chap14-subchap01.component';
import { Chap14Subchap02Component } from './components/chap14-subchap02/chap14-subchap02.component';



export const chap14Routes: Routes = [
  {
    path: 'chap14/subchap01',
    component: Chap14Subchap01Component
  },
  {
    path: 'chap14/subchap02',
    component: Chap14Subchap02Component
  }
]; 