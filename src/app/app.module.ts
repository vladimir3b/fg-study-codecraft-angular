import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { RootComponent } from './root.component';
import { PageNotFoundComponent } from './others/components/page-not-found/page-not-found.component';
import { appRoutes } from './app.routes';
import { HomePageComponent } from './others/components/home-page/home-page.component';
import { Chap02RootComponent } from './chap02/components/chap02-root/chap02-root.component';
import { Chap02Subchap06Component } from './chap02/components/chap02-subchap06/chap02-subchap06.component';
import { Chap02Subchap07Component } from './chap02/components/chap02-subchap07/chap02-subchap07.component';
import { Chap02Subchap08Component } from './chap02/components/chap02-subchap08/chap02-subchap08.component';
import { Chap02Subchap03Component } from './chap02/components/chap02-subchap03/chap02-subchap03.component';
import { Chap02Subchap09Component } from './chap02/components/chap02-subchap09/chap02-subchap09.component';
import { Chap04Subchap01Component } from './chap04/components/chap04-subchap01/chap04-subchap01.component';
import { Chap04Subchap02Component } from './chap04/components/chap04-subchap02/chap04-subchap02.component';
import { Chap04RootComponent } from './chap04/components/chap04-root/chap04-root.component';
import { Chap04ComponentTest1Component } from './chap04/components/chap04-component-test1/chap04-component-test1.component';
import { Chap04ComponentTest2Component } from './chap04/components/chap04-component-test2/chap04-component-test2.component';
import { Chap04ComponentTest3Component } from './chap04/components/chap04-component-test3/chap04-component-test3.component';
import { Chap04ComponentTest4Component } from './chap04/components/chap04-component-test4/chap04-component-test4.component';

import { Chap02Subchap04Component } from './chap02/components/chap02-subchap04/chap02-subchap04.component';


@NgModule({
  declarations: [
    RootComponent,
    PageNotFoundComponent,
    HomePageComponent,
    Chap02RootComponent,
    Chap02Subchap06Component,
    Chap02Subchap07Component,
    Chap02Subchap08Component,
    Chap02Subchap03Component,
    Chap02Subchap09Component,
    Chap04Subchap01Component,
    Chap04RootComponent,
    Chap04ComponentTest1Component,
    Chap04ComponentTest2Component,
    Chap04ComponentTest3Component,
    Chap04ComponentTest4Component,
    Chap04Subchap02Component,
    Chap02Subchap04Component
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
