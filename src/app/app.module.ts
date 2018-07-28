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
import { Chap06Test1Directive } from './chap06/directives/chap06-test1.directive';
import { Chap06Subchap02Component } from './chap06/components/chap06-subchap02/chap06-subchap02.component';
import { Chap06ShowOnHoverDirective } from './chap06/directives/chap06-show-on-hover.directive';
import { Chap06Subchap03Component } from './chap06/components/chap06-subchap03/chap06-subchap03.component';
import { Chap06ChangeOnHoverDirective } from './chap06/directives/chap06-change-on-hover.directive';
import { Review1RootComponent } from './review1/components/review1-root/review1-root.component';
import { Review1Subchap01Component } from './review1/components/review1-subchap01/review1-subchap01.component';
import { Chap07Subchap01Component } from './chap07/components/chap07-subchap01/chap07-subchap01.component';
import { Chap07Subchap02Component } from './chap07/components/chap07-subchap02/chap07-subchap02.component';
import { Chap07RootComponent } from './chap07/components/chap07-root/chap07-root.component';
import { Chap08RootComponent } from './chap08/components/chap08-root/chap08-root.component';
import { Chap08Subchap01Component } from './chap08/components/chap08-subchap01/chap08-subchap01.component';
import { Chap08Subchap02Component } from './chap08/components/chap08-subchap02/chap08-subchap02.component';
import { Chap08Subchap03Component } from './chap08/components/chap08-subchap03/chap08-subchap03.component';
import { Chap09Subchap01Component } from './chap09/components/chap09-subchap01/chap09-subchap01.component';
import { Chap09Subchap02Component } from './chap09/components/chap09-subchap02/chap09-subchap02.component';
import { Chap09Subchap03Component } from './chap09/components/chap09-subchap03/chap09-subchap03.component';
import { Chap09Subchap04Component } from './chap09/components/chap09-subchap04/chap09-subchap04.component';
import { Chap09Subchap05Component } from './chap09/components/chap09-subchap05/chap09-subchap05.component';
import { Chap09RootComponent } from './chap09/components/chap09-root/chap09-root.component';
import { Review2Subchap01Component } from './review2/components/review2-subchap01/review2-subchap01.component';
import { Review2Subchap02Component } from './review2/components/review2-subchap02/review2-subchap02.component';
import { Review2Subchap03Component } from './review2/components/review2-subchap03/review2-subchap03.component';
import { Review2RootComponent } from './review2/components/review2-root/review2-root.component';
import { Review3RootComponent } from './review3/components/review3-root/review3-root.component';
import { Review3Subchap01Component } from './review3/components/review3-subchap01/review3-subchap01.component';
import { Review3Subchap02Component } from './review3/components/review3-subchap02/review3-subchap02.component';
import { Review3Subchap03Component } from './review3/components/review3-subchap03/review3-subchap03.component';
import { Review3Subchap04Component } from './review3/components/review3-subchap04/review3-subchap04.component';
import { Chap02Subchap05Component } from './chap02/components/chap02-subchap05/chap02-subchap05.component';
import { Chap02Subchap01Component } from './chap02/components/chap02-subchap01/chap02-subchap01.component';
import { Chap02Subchap02Component } from './chap02/components/chap02-subchap02/chap02-subchap02.component';
import { Chap01Subchap01Component } from './chap01/components/chap01-subchap01/chap01-subchap01.component';
import { Chap01RootComponent } from './chap01/components/chap01-root/chap01-root.component';
import { Review2CloseElementDirective } from './review2/directives/review2-close-element.directive';




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
    Chap06RootComponent,
    Chap06Test1Directive,
    Chap06Subchap02Component,
    Chap06ShowOnHoverDirective,
    Chap06Subchap03Component,
    Chap06ChangeOnHoverDirective,
    Review1RootComponent,
    Review1Subchap01Component,
    Chap07Subchap01Component,
    Chap07Subchap02Component,
    Chap07RootComponent,
    Chap08RootComponent,
    Chap08Subchap01Component,
    Chap08Subchap02Component,
    Chap08Subchap03Component,
    Chap09Subchap01Component,
    Chap09Subchap02Component,
    Chap09Subchap03Component,
    Chap09Subchap04Component,
    Chap09Subchap05Component,
    Chap09RootComponent,
    Review2Subchap01Component,
    Review2Subchap02Component,
    Review2Subchap03Component,
    Review2RootComponent,
    Review3RootComponent,
    Review3Subchap01Component,
    Review3Subchap02Component,
    Review3Subchap03Component,
    Review3Subchap04Component,
    Chap02Subchap05Component,
    Chap02Subchap01Component,
    Chap02Subchap02Component,
    Chap01Subchap01Component,
    Chap01RootComponent,
    Review2CloseElementDirective 
      
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
