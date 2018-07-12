import { ChapRootComponent } from './chap02/others/components/chap-root/chap-root.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';


import { PageNotFoundComponent } from './others/components/page-not-found/page-not-found.component';
import { HomePageComponent } from './others/components/home-page/home-page.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'chap02',
    component: ChapRootComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];