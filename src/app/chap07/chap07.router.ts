import { Routes } from '@angular/router';

import { Chap07Subchap01Component } from './components/chap07-subchap01/chap07-subchap01.component';
import { Chap07Subchap02Component } from './components/chap07-subchap02/chap07-subchap02.component';

export const chap07Routes: Routes = [
  {
    path: 'chap07/subchap01',
    component: Chap07Subchap01Component
  },
  {
    path: 'chap07/subchap02',
    component: Chap07Subchap02Component
  }
]; 