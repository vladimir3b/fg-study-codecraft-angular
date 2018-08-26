import { Component, OnInit, ReflectiveInjector, InjectionToken } from '@angular/core';

@Component({
  selector: 'fg-app-chap10-subchap03',
  templateUrl: './chap10-subchap03.component.html',
  styleUrls: ['./chap10-subchap03.component.scss']
})
export class Chap10Subchap03Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.tokens();
  }

  public tokens(): void {

    class MyService1 {};
    class MyService2 {};

    let myToken: InjectionToken<string> = new InjectionToken<string>('an example with an injection token'); // this string is useful in case of an error 

    let generateString: Function = (num: number): string => (num === 2) ? 'nothingSpecial' : 'somethingSpecial'; // a dumb function just to show the name clashes - stringToken1 === stringToken2

    let stringToken1: string = 'nothingSpecial';
    let stringToken2: string = generateString(2);

    let injectionToken1: InjectionToken<string> = new InjectionToken<string>(stringToken1);
    let injectionToken2: InjectionToken<string> = new InjectionToken<string>(stringToken2); // using injection token clashes will be prevented even though stringToken1 === stringToken2

    let injector = ReflectiveInjector.resolveAndCreate([
      {
        provide: 'stringToken',
        useClass: MyService1 
      },
      {
        provide: MyService1,
        useValue: 'You used a class as a token.'
      },
      {
        provide: myToken,
        useClass: MyService2
      },
      {
        provide: stringToken1,
        useValue: 'string token 1'
      },
      {
        provide: stringToken2,
        useValue: 'string token 2'
      },
      {
        provide: injectionToken1,
        useValue: 'injection token 1'
      },
      {
        provide: injectionToken2,
        useValue: 'injection token 2'
      },      
    ]);

    let service01 = injector.get('stringToken');
    console.log(service01);
    let service02 = injector.get(MyService1);
    console.log(service02);
    let service03 = injector.get(myToken);
    console.log(service03);
    let service04 = injector.get(stringToken1);
    console.log(service04); // we expect to get 'string token 1' but... there will be a name clash
    let service05 = injector.get(stringToken2);
    console.log(service05); // we will get 'string token 2' because when we have different providers with the same token, the last one overwrites the previous ones
    let service06 = injector.get(injectionToken1);
    console.log(service06);
    let service07 = injector.get(injectionToken2);
    console.log(service07);
  }

}
