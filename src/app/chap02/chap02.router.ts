import { Routes } from '@angular/router';

import { Chap02Subchap06Component } from './components/chap02-subchap06/chap02-subchap06.component';
import { Chap02Subchap07Component } from './components/chap02-subchap07/chap02-subchap07.component';

export const chap02Routes: Routes = [
  {
    path: 'chap02/subchap06',
    component: Chap02Subchap06Component
  },
  {
    path: 'chap02/subchap07',
    component: Chap02Subchap07Component
  }
]; 