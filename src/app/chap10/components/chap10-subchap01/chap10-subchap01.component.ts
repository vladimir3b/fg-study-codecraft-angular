import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { myMath } from '../../../_others/libraries/typescript/math';


@Component({
  selector: 'fg-app-chap10-subchap01',
  templateUrl: './chap10-subchap01.component.html',
  styleUrls: ['./chap10-subchap01.component.scss']
})
export class Chap10Subchap01Component implements OnInit {

  constructor() { }

  ngOnInit() {
    this.overviewDependencyInjection();
    this.injectors();
  }

  public overviewDependencyInjection() {

    interface IDatabaseCommunication {
      readData: (tableName: string) => Array<string>;
      writeData: <T>(tableName: string, data: T) => boolean;
      deleteData: (tableName: string, key: string) => boolean;
    }

    class DbManagementSystem implements IDatabaseCommunication {

      constructor(private _authenticationCode: string) {}

      public readData = (tableName: string) => ['word 1', 'word2', 'word3'];
      public writeData = <T>(tableName: string, data: T) => (myMath.randomInteger(100, 1500)%2) ? true : false;
      public deleteData = (tableName: string, key: string) => (myMath.randomInteger(100, 1500)%2) ? true : false;
      public numberOfRecords = (tableName: string): number => myMath.randomInteger(100, 1500);

      public authenticationCode = () => this._authenticationCode;
    }
    
    class DBMagSys1 extends DbManagementSystem {
      public name: string = 'DBMagSys1';
    }

    class DBMagSys2 extends DbManagementSystem {
      public serverLocation: string = 'https://localhost:16485';
    }

    class DBService1 {
      public databaseServiceUsed: IDatabaseCommunication;      

      constructor(public tableName: string, public authenticationCode: string) {
        this.databaseServiceUsed = new DBMagSys1(authenticationCode);// this is hard-coded
      }

      public writeData(data: Array<string>) {
        if (this.databaseServiceUsed.writeData(this.tableName, data)) {
          console.log('Data was saved to the database');
        } else {
          console.error('Couldn\'t save data to the database');
        }
      }
      
    }

    class DBService2 {
      public databaseServiceUsed: IDatabaseCommunication;      

      constructor(public tableName: string, public DBMagSys: IDatabaseCommunication) {
        this.databaseServiceUsed = DBMagSys;
      }

      public writeData(data: Array<string>) {
        if (this.databaseServiceUsed.writeData(this.tableName, data)) {
          console.log('Data was saved to the database');
        } else {
          console.error('Couldn\'t save data to the database');
        }
      }
      
    }

    let database1: DBService1 = new DBService1('persons', 'SDF3463DSE');
    database1.writeData(['something1', 'something2']);
    console.log(database1.authenticationCode === (<DbManagementSystem>database1.databaseServiceUsed).authenticationCode());

    let database2: DBService2 = new DBService2('candidates', new DBMagSys1('ADEWER23WE'));
    let database3: DBService2 = new DBService2('candidates', new DBMagSys2('DRAGNEEA23424'));
    database2.writeData(['a', 'b', 'b']);
    database3.writeData(['1', '2', '3']);
    console.log((<DbManagementSystem>database2.databaseServiceUsed).authenticationCode()); // this is dependency injection
    console.log((<DbManagementSystem>database3.databaseServiceUsed).authenticationCode());
  }

  public injectors() {

    class EmailService {};

    class InstantMessagingService {
      public providerName: string;
      public chatChannels: Array<string>
      // constructor(public providerName: string, public chatChannels: Array<string>) {}
    };
    
    let injector1: ReflectiveInjector = ReflectiveInjector.resolveAndCreate([
      EmailService,
      InstantMessagingService
    ]);


    let communicationService1: InstantMessagingService = injector1.get(InstantMessagingService);
    let communicationService2: InstantMessagingService = injector1.get(InstantMessagingService);
    console.log(communicationService1);
    console.log(communicationService1 === communicationService2); // communicationService1 and 2 are the same instance of InstantMessagingService

    let injector2: ReflectiveInjector = ReflectiveInjector.resolveAndCreate([EmailService]);
    let childInjector1: ReflectiveInjector = injector2.resolveAndCreateChild([EmailService]);
    let childInjector2: ReflectiveInjector = injector2.resolveAndCreateChild([]); //a child injector forwards the request to its parents if it cannot resolve a token

    let communicationService3: EmailService = injector2.get(EmailService);
    let communicationService4: EmailService = childInjector1.get(EmailService);
    let communicationService5: EmailService = childInjector2.get(EmailService);
    console.log(communicationService3);
    console.log(communicationService4);
    console.log(communicationService5);
    console.log(communicationService3 === communicationService4);
    console.log(communicationService3 === communicationService5);

  }

}
