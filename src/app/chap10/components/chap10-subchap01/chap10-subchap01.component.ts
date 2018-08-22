import { Component, OnInit } from '@angular/core';
import { myMath } from '../../../_others/libraries/typescript/math';


@Component({
  selector: 'fg-app-chap10-subchap01',
  templateUrl: './chap10-subchap01.component.html',
  styleUrls: ['./chap10-subchap01.component.scss']
})
export class Chap10Subchap01Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public simulateDependencyInjection() {

    interface IDatabaseCommunication {
      readData: (tableName: string) => Array<string>;
      writeData: (tableName: string, data: string) => boolean;
      deleteData: (tableName: string, key: string) => boolean;
    }

    class DbManagementSystem implements IDatabaseCommunication {

      constructor(private _authenticationCode: string) {}

      public readData = (tableName: string) => ['word 1', 'word2', 'word3'];
      public writeData = (tableName: string, data: string) => (myMath.randomInteger(100, 1500)%2) ? true : false;
      public deleteData = (tableName: string, key: string) => (myMath.randomInteger(100, 1500)%2) ? true : false;
      public numberOfRecords = (tableName: string): number => myMath.randomInteger(100, 1500);

      public autenticationCode = () => this._authenticationCode;
    }
    
    class DBMagSys1 extends DbManagementSystem {
      public name: string = 'DBMagSys1';
    }

    class DBMagSys2 extends DbManagementSystem {
      public serverLocation: string = 'https://localhost:16485';
    }

    class DBService1 {
      public databaseServiceUsed
    }

  }

}
