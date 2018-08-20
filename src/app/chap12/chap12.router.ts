import { Routes } from '@angular/router';

import { Chap12Subchap01Component } from './components/chap12-subchap01/chap12-subchap01.component';
import { Chap12Subchap02Component } from './components/chap12-subchap02/chap12-subchap02.component';
import { Chap12Subchap03Component } from './components/chap12-subchap03/chap12-subchap03.component';
import { Chap12Subchap04Component } from './components/chap12-subchap04/chap12-subchap04.component';
import { Chap12Subchap05Component } from './components/chap12-subchap05/chap12-subchap05.component';
import { Chap12Subchap06Component } from './components/chap12-subchap06/chap12-subchap06.component';


export const chap12Routes: Routes = [
  {
    path: 'chap12/subchap01',
    component: Chap12Subchap01Component
  },
  {
    path: 'chap12/subchap02',
    component: Chap12Subchap02Component
  },
  {
    path: 'chap12/subchap03',
    component: Chap12Subchap03Component
  },
  {
    path: 'chap12/subchap04',
    component: Chap12Subchap04Component
  },
  {
    path: 'chap12/subchap05',
    component: Chap12Subchap05Component
  },
  {
    path: 'chap12/subchap06',
    component: Chap12Subchap06Component
  }
]; 