import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

const LOCAL_STORAGE_PREFIX: string = 'fg-cc-study-';
const FORM_KEYS: Array<string> = ['username', 'email', 'message'];

interface IStored {
  username?: string;
  email?: string;
  message?: string;
}

@Component({
  selector: 'fg-app-review3-subchap01',
  templateUrl: './review3-subchap01.component.html',
  styleUrls: ['./review3-subchap01.component.scss']
})
export class Review3Subchap01Component implements OnInit {

  public messageForm: FormGroup;
  public stored: IStored = {};
  public activateLocalStorage: boolean = true;

  constructor() { }


  public localStorageKey(key: string): string {
    return `${LOCAL_STORAGE_PREFIX}${key}`;
  }

  private _loadLocalStorageValues() {

    FORM_KEYS.forEach((value: string) => {
      this.stored[value] = localStorage.getItem(this.localStorageKey(value));
    });

    // this is the short form for:
    // this.stored['username'] = localStorage.getItem(this.localStorageKey('username'));
    // this.stored['email'] = localStorage.getItem(this.localStorageKey('email'));
    // this.stored['message'] = localStorage.getItem(this.localStorageKey('message'));
  }

  ngOnInit() {
    this._loadLocalStorageValues();  
    this.messageForm = new FormGroup({});
  }

  public onSubmit(): void {
    console.log('Something submitted...');
    if (this.messageForm.valid) {
      console.log(this.messageForm.value);
    }    
  }

  public localStore(key: string, value: string):void {
    if (this.activateLocalStorage) {
      localStorage.setItem(this.localStorageKey(key), value);
    }
  }

  public deleteStroage():void {    
    FORM_KEYS.forEach((value: string) => { 
      localStorage.removeItem(this.localStorageKey(value));
    });    
  }
  
}
