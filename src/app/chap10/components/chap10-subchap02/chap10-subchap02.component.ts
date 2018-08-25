import { Component, OnInit, ReflectiveInjector } from '@angular/core';

@Component({
  selector: 'fg-app-chap10-subchap02',
  templateUrl: './chap10-subchap02.component.html',
  styleUrls: ['./chap10-subchap02.component.scss']
})
export class Chap10Subchap02Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.providers();
  }

  public providers() {

    class GenericService {
      public genericService: string;
    };
    class MyService0 {
      public myService0: string;
    };
    class MyService1 {
      public myService1: string;
    };
    class MyService2 {
      public myService2: string;
    };
    class MyService3 {
      public myService3: string;
    };
    class MyService4 {
      public myService4: string;
    };
    
    let injector: ReflectiveInjector = ReflectiveInjector.resolveAndCreate([
      // here is a list pof providers
      MyService0, 
      /**
       * this is equivalent to (a shortcut for)
       * 
       *  {
       *     provide: MyService0,
       *     useClass: MyService0
       *  },
       * 
       */
      {
        provide: MyService1,
        useClass: MyService1
      },
      {
        provide: 'service2',
        useClass: MyService2
      },
      {
        provide: 'generic',
        useClass: GenericService
      },
      {
        provide: 'chosenService',
        useExisting: 'generic'
      },
      {
        provide: MyService3,
        useValue: 'Dragnea is God!'
      },
      {
        provide: 'my-config-1',
        useValue: {
          screenResolution: 'FullHD',
          displaySize: 12
        }
      },
      {
        provide: 'my-config-2',
        useValue: Object.freeze({
          screenResolution: '4K',
          displaySize: 25
        })
      },
      {
        provide: MyService4,
        useFactory: (): string => {
          console.log('Dragnea is God in Romanian Land.');
          return 'bull-shit'
        }
      }

    ]);

  
    let injectAService1 = injector.get('service2');
    console.log(injectAService1);
    let injectAService2 = injector.get(MyService0);
    console.log(injectAService2);

    /**
     *  let injectAService3 = injector.get(MyService2); // this will throw an error: there is no provider for class 'MyService'
     *  console.log(injectAService3);
     */
   
    let injectAService4 = injector.get('chosenService');
    console.log(injectAService4);
    let injectAService5 = injector.get(MyService3);
    console.log(injectAService5);
    let injectAService6 = injector.get('my-config-1');
    console.log(injectAService6);
    injectAService6.displaySize = 'aedfw'; // object is mutable
    console.log(injectAService6);
    let injectAService7 = injector.get('my-config-2');
    console.log(injectAService7);
    // injectAService7.displaySize = 'aedfw'; // object is immutable and this will throw an error
    // console.log(injectAService7);
    let injectAService8 = injector.get(MyService4); // this executes the function in the factory definition
    console.log(injectAService8);

  }

}

