import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { RootComponent } from './root.component';
import { PageNotFoundComponent } from './others/components/page-not-found/page-not-found.component';
import { appRoutes } from './app.routes';
import { HomePageComponent } from './others/components/home-page/home-page.component';
// --------------------------------
import { Chap02RootComponent } from './chap02/components/chap02-root/chap02-root.component';
import { Chap04RootComponent } from './chap04/components/chap04-root/chap04-root.component';
// --------------------------------
import { Chap02Subchap03Component } from './chap02/components/chap02-subchap03/chap02-subchap03.component';
import { Chap02Subchap04Component } from './chap02/components/chap02-subchap04/chap02-subchap04.component';
import { Chap02Subchap06Component } from './chap02/components/chap02-subchap06/chap02-subchap06.component';
import { Chap02Subchap07Component } from './chap02/components/chap02-subchap07/chap02-subchap07.component';
import { Chap02Subchap08Component } from './chap02/components/chap02-subchap08/chap02-subchap08.component';
import { Chap02Subchap09Component } from './chap02/components/chap02-subchap09/chap02-subchap09.component';
// --------------------------------
import { Chap04ComponentTest1Component } from './chap04/components/chap04-component-test1/chap04-component-test1.component';
import { Chap04ComponentTest2Component } from './chap04/components/chap04-component-test2/chap04-component-test2.component';
import { Chap04ComponentTest3Component } from './chap04/components/chap04-component-test3/chap04-component-test3.component';
import { Chap04ComponentTest4Component } from './chap04/components/chap04-component-test4/chap04-component-test4.component';
// --------------------------------
import { Chap04Subchap01Component } from './chap04/components/chap04-subchap01/chap04-subchap01.component';
import { Chap04Subchap02Component } from './chap04/components/chap04-subchap02/chap04-subchap02.component';
import { Chap04Subchap03Component } from './chap04/components/chap04-subchap03/chap04-subchap03.component';
import { Chap04Subchap04Component } from './chap04/components/chap04-subchap04/chap04-subchap04.component';
// --------------------------------
import { Chap04Test01Component } from './chap04/components/chap04-test01/chap04-test01.component';
import { Chap04Test02Component } from './chap04/components/chap04-test02/chap04-test02.component';
import { Chap04Test03Component } from './chap04/components/chap04-test03/chap04-test03.component';
import { Chap04NewPersonComponent } from './chap04/components/chap04-new-person/chap04-new-person.component';
import { Chap04ListOfPersonsComponent } from './chap04/components/chap04-list-of-persons/chap04-list-of-persons.component';
import { Chap04ListOnePersonComponent } from './chap04/components/chap04-list-one-person/chap04-list-one-person.component';
import { Chap05RootComponent } from './chap05/components/chap05-root/chap05-root.component';
import { Chap05Subchap01Component } from './chap05/components/chap05-subchap01/chap05-subchap01.component';
import { Chap05Subchap02Component } from './chap05/components/chap05-subchap02/chap05-subchap02.component';
import { Chap05Subchap03Component } from './chap05/components/chap05-subchap03/chap05-subchap03.component';
import { Chap05Subchap04Component } from './chap05/components/chap05-subchap04/chap05-subchap04.component';
import { Chap06Subchap01Component } from './chap06/components/chap06-subchap01/chap06-subchap01.component';
import { Chap06RootComponent } from './chap06/components/chap06-root/chap06-root.component';



@NgModule({
  declarations: [
    RootComponent,
    PageNotFoundComponent,
    HomePageComponent,
    // --------------------------------
    Chap02RootComponent,
    Chap04RootComponent,
    // --------------------------------
    Chap02Subchap03Component,
    Chap02Subchap04Component,
    Chap02Subchap06Component,
    Chap02Subchap07Component,
    Chap02Subchap08Component,    
    Chap02Subchap09Component,
    // --------------------------------
    Chap04Subchap01Component,
    Chap04Subchap02Component,
    Chap04Subchap03Component,   
    Chap04Subchap04Component,   
    // --------------------------------
    Chap04ComponentTest1Component,
    Chap04ComponentTest2Component,
    Chap04ComponentTest3Component,
    Chap04ComponentTest4Component,
    // --------------------------------
    Chap04Test01Component,
    Chap04Test02Component,
    Chap04Test03Component,
    Chap04NewPersonComponent,
    Chap04ListOfPersonsComponent,
    Chap04ListOnePersonComponent,
    Chap05RootComponent,
    Chap05Subchap01Component,
    Chap05Subchap02Component,
    Chap05Subchap03Component,
    Chap05Subchap04Component,
    Chap06Subchap01Component,
    Chap06RootComponent  
      
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
