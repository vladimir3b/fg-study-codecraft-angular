import { MyService3 } from './chap10/services/myService3.service';
import { MyService2 } from './chap10/services/myService2.service';
import { MyService1 } from './chap10/services/myService1.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { RootComponent } from './root.component';
import { PageNotFoundComponent } from './_others/components/page-not-found/page-not-found.component';
import { appRoutes } from './app.routes';
import { HomePageComponent } from './_others/components/home-page/home-page.component';
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
import {  Review2DeleteElementDirective } from './review2/directives/review2-delete-element.directive';
import { DefaultPipe } from './chap08/pipes/default.pipe';
import { Chap10RootComponent } from './chap10/components/chap10-root/chap10-root.component';
import { Chap10Subchap01Component } from './chap10/components/chap10-subchap01/chap10-subchap01.component';
import { Chap10Subchap02Component } from './chap10/components/chap10-subchap02/chap10-subchap02.component';
import { Chap10Subchap03Component } from './chap10/components/chap10-subchap03/chap10-subchap03.component';
import { Chap10Subchap04Component } from './chap10/components/chap10-subchap04/chap10-subchap04.component';
import { Chap10Subchap05Component } from './chap10/components/chap10-subchap05/chap10-subchap05.component';
import { Chap11Subchap01Component } from './chap11/components/chap11-subchap01/chap11-subchap01.component';
import { Chap11Subchap02Component } from './chap11/components/chap11-subchap02/chap11-subchap02.component';
import { Chap11Subchap03Component } from './chap11/components/chap11-subchap03/chap11-subchap03.component';
import { Chap11Subchap04Component } from './chap11/components/chap11-subchap04/chap11-subchap04.component';
import { Chap11RootComponent } from './chap11/components/chap11-root/chap11-root.component';
import { Chap12RootComponent } from './chap12/components/chap12-root/chap12-root.component';
import { Chap13RootComponent } from './chap13/components/chap13-root/chap13-root.component';
import { Chap12Subchap01Component } from './chap12/components/chap12-subchap01/chap12-subchap01.component';
import { Chap12Subchap02Component } from './chap12/components/chap12-subchap02/chap12-subchap02.component';
import { Chap12Subchap03Component } from './chap12/components/chap12-subchap03/chap12-subchap03.component';
import { Chap12Subchap04Component } from './chap12/components/chap12-subchap04/chap12-subchap04.component';
import { Chap12Subchap05Component } from './chap12/components/chap12-subchap05/chap12-subchap05.component';
import { Chap12Subchap06Component } from './chap12/components/chap12-subchap06/chap12-subchap06.component';
import { Chap13Subchap06Component } from './chap13/components/chap13-subchap06/chap13-subchap06.component';
import { Chap13Subchap07Component } from './chap13/components/chap13-subchap07/chap13-subchap07.component';
import { Chap13Subchap08Component } from './chap13/components/chap13-subchap08/chap13-subchap08.component';
import { Chap13Subchap09Component } from './chap13/components/chap13-subchap09/chap13-subchap09.component';
import { Chap13Subchap10Component } from './chap13/components/chap13-subchap10/chap13-subchap10.component';
import { Chap13Subchap11Component } from './chap13/components/chap13-subchap11/chap13-subchap11.component';
import { Chap13Subchap12Component } from './chap13/components/chap13-subchap12/chap13-subchap12.component';
import { Chap13Subchap13Component } from './chap13/components/chap13-subchap13/chap13-subchap13.component';
import { Chap13Subchap05Component } from './chap13/components/chap13-subchap05/chap13-subchap05.component';
import { Chap13Subchap04Component } from './chap13/components/chap13-subchap04/chap13-subchap04.component';
import { Chap13Subchap03Component } from './chap13/components/chap13-subchap03/chap13-subchap03.component';
import { Chap13Subchap02Component } from './chap13/components/chap13-subchap02/chap13-subchap02.component';
import { Chap13Subchap01Component } from './chap13/components/chap13-subchap01/chap13-subchap01.component';
import { Chap14RootComponent } from './chap14/components/chap14-root/chap14-root.component';
import { Chap14Subchap01Component } from './chap14/components/chap14-subchap01/chap14-subchap01.component';
import { Chap14Subchap02Component } from './chap14/components/chap14-subchap02/chap14-subchap02.component';
import { Chap15Subchap01Component } from './chap15/components/chap15-subchap01/chap15-subchap01.component';
import { Chap15Subchap02Component } from './chap15/components/chap15-subchap02/chap15-subchap02.component';
import { Chap15Subchap03Component } from './chap15/components/chap15-subchap03/chap15-subchap03.component';
import { Chap15Subchap04Component } from './chap15/components/chap15-subchap04/chap15-subchap04.component';
import { Chap15Subchap05Component } from './chap15/components/chap15-subchap05/chap15-subchap05.component';
import { Chap15Subchap06Component } from './chap15/components/chap15-subchap06/chap15-subchap06.component';
import { Chap15Subchap07Component } from './chap15/components/chap15-subchap07/chap15-subchap07.component';
import { Chap15Subchap08Component } from './chap15/components/chap15-subchap08/chap15-subchap08.component';
import { Chap15RootComponent } from './chap15/components/chap15-root/chap15-root.component';
import { Review4RootComponent } from './review4/components/review4-root/review4-root.component';
import { Review4Subchap01Component } from './review4/components/review4-subchap01/review4-subchap01.component';
import { Review4Subchap02Component } from './review4/components/review4-subchap02/review4-subchap02.component';
import { Review4Subchap03Component } from './review4/components/review4-subchap03/review4-subchap03.component';
import { Review4Subchap04Component } from './review4/components/review4-subchap04/review4-subchap04.component';
import { Review4Subchap05Component } from './review4/components/review4-subchap05/review4-subchap05.component';
import { Review5Subchap01Component } from './review5/components/review5-subchap01/review5-subchap01.component';
import { Review5Subchap02Component } from './review5/components/review5-subchap02/review5-subchap02.component';
import { Review5Subchap03Component } from './review5/components/review5-subchap03/review5-subchap03.component';
import { Review5Subchap04Component } from './review5/components/review5-subchap04/review5-subchap04.component';
import { Review5Subchap05Component } from './review5/components/review5-subchap05/review5-subchap05.component';
import { Review5RootComponent } from './review5/components/review5-root/review5-root.component';
import { StudyRootComponent } from './study/components/study-root/study-root.component';
import { Study01Component } from './study/components/study01/study01.component';
import { Study02Component } from './study/components/study02/study02.component';
import { Study03Component } from './study/components/study03/study03.component';
import { Study04Component } from './study/components/study04/study04.component';
import { Study05Component } from './study/components/study05/study05.component';
import { Study06Component } from './study/components/study06/study06.component';
import { Study07Component } from './study/components/study07/study07.component';
import { Study08Component } from './study/components/study08/study08.component';
import { Study09Component } from './study/components/study09/study09.component';
import { Study10Component } from './study/components/study10/study10.component';
import { Study11Component } from './study/components/study11/study11.component';
import { Study12Component } from './study/components/study12/study12.component';
import { Study13Component } from './study/components/study13/study13.component';
import { Study14Component } from './study/components/study14/study14.component';
import { Study15Component } from './study/components/study15/study15.component';
import { Study16Component } from './study/components/study16/study16.component';
import { Study17Component } from './study/components/study17/study17.component';
import { Study18Component } from './study/components/study18/study18.component';
import { Study19Component } from './study/components/study19/study19.component';
import { Study20Component } from './study/components/study20/study20.component';
import { Study21Component } from './study/components/study21/study21.component';
import { Study22Component } from './study/components/study22/study22.component';
import { Study23Component } from './study/components/study23/study23.component';
import { Study24Component } from './study/components/study24/study24.component';
import { Study25Component } from './study/components/study25/study25.component';
import { MyService } from './chap10/services/myService.service';
import { LogService } from './chap10/services/logService.service';
import { Comp01Component } from './chap10/components/comp01/comp01.component';
import { Comp02Component } from './chap10/components/comp02/comp02.component';
import { ShowValueDirective } from './review2/directives/show-value.directive';
import { RepeatElementDirective } from './review2/directives/repeat-element.directive';
import { Review4ParentService } from './review4/services/review4-parent.service';
import { REVIEW4_PARENT_SERVICE_TOKEN } from './_others/tokens';
import { Review4ChildComponent } from './review4/components/review4-child/review4-child.component';
import { Review4ParentComponent } from './review4/components/review4-parent/review4-parent.component';

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
    Review2DeleteElementDirective,
    DefaultPipe,
    Chap10RootComponent,
    Chap10Subchap01Component,
    Chap10Subchap02Component,
    Chap10Subchap03Component,
    Chap10Subchap04Component,
    Chap10Subchap05Component,
    Chap11Subchap01Component,
    Chap11Subchap02Component,
    Chap11Subchap03Component,
    Chap11Subchap04Component,
    Chap11RootComponent,
    Chap12RootComponent,
    Chap13RootComponent,
    Chap12Subchap01Component,
    Chap12Subchap02Component,
    Chap12Subchap03Component,
    Chap12Subchap04Component,
    Chap12Subchap05Component,
    Chap12Subchap06Component,
    Chap13Subchap06Component,
    Chap13Subchap07Component,
    Chap13Subchap08Component,
    Chap13Subchap09Component,
    Chap13Subchap10Component,
    Chap13Subchap11Component,
    Chap13Subchap12Component,
    Chap13Subchap13Component,
    Chap13Subchap05Component,
    Chap13Subchap04Component,
    Chap13Subchap03Component,
    Chap13Subchap02Component,
    Chap13Subchap01Component,
    Chap14RootComponent,
    Chap14Subchap01Component,
    Chap14Subchap02Component,
    Chap15Subchap01Component,
    Chap15Subchap02Component,
    Chap15Subchap03Component,
    Chap15Subchap04Component,
    Chap15Subchap05Component,
    Chap15Subchap06Component,
    Chap15Subchap07Component,
    Chap15Subchap08Component,
    Chap15RootComponent,
    Review4RootComponent,
    Review4Subchap01Component,
    Review4Subchap02Component,
    Review4Subchap03Component,
    Review4Subchap04Component,
    Review4Subchap05Component,
    Review5Subchap01Component,
    Review5Subchap02Component,
    Review5Subchap03Component,
    Review5Subchap04Component,
    Review5Subchap05Component,
    Review5RootComponent,
    StudyRootComponent,
    Study01Component,
    Study02Component,
    Study03Component,
    Study04Component,
    Study05Component,
    Study06Component,
    Study07Component,
    Study08Component,
    Study09Component,
    Study10Component,
    Study11Component,
    Study12Component,
    Study13Component,
    Study14Component,
    Study15Component,
    Study16Component,
    Study17Component,
    Study18Component,
    Study19Component,
    Study20Component,
    Study21Component,
    Study22Component,
    Study23Component,
    Study24Component,
    Study25Component,
    Comp01Component,
    Comp02Component,
    ShowValueDirective,
    RepeatElementDirective,
    Review4ChildComponent,
    Review4ParentComponent   
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [
    {
      provide: 'criminal',
      useValue:  {
        firstName: 'Liviu',
        lastName: 'Dragnea',
        title: 'criminal'
      }
    },
    MyService1,
    MyService2,
    MyService3,
    {
      provide: REVIEW4_PARENT_SERVICE_TOKEN,
      useClass: Review4ParentService
    }
    
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
