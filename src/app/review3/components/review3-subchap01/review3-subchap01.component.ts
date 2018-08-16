import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const LOCAL_STORAGE_PREFIX: string = 'fg-cc-study-';
const FORM_KEYS: Array<string> = ['username', 'email', 'message'];

interface IStored {
  username?: string;
  email?: string;
  message?: string;
}

interface IValidator {
  isValid?: boolean;
  message?: string;
}

interface IInvalidator {
  isInvalid?: boolean;
  message?: string;
}

@Component({
  selector: 'fg-app-review3-subchap01',
  templateUrl: './review3-subchap01.component.html',
  styleUrls: ['./review3-subchap01.component.scss']
})
export class Review3Subchap01Component implements  OnInit {

  @ViewChild('activateLocalStorageInput') public activateLocalStorageInput: ElementRef;
  public messageForm: FormGroup;
  public stored: IStored = {};
  public activateLocalStorage: boolean = true;

  constructor() { }

  public localStorageKey(key: string): string {
    return `${LOCAL_STORAGE_PREFIX}${key}`;
  }

  private _loadLocalStorageValues() {
    FORM_KEYS.forEach((value: string) => {
      this.stored[value] = (localStorage.getItem(this.localStorageKey(value))) ?
      localStorage.getItem(this.localStorageKey(value)) : '';
    });
  }

  ngOnInit() {    
    this._loadLocalStorageValues();  
    this.messageForm = new FormGroup({
      username: new FormControl(this.stored['username'], Validators.required),
      email: new FormControl(this.stored['email'], [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')
      ]),
      message: new FormControl(this.stored['message'], [
        Validators.required,
        Validators.minLength(12)
      ])
    });    
  }

  public localStore(key: string, value: string):void {
    if (this.activateLocalStorage) {
      localStorage.setItem(this.localStorageKey(key), value);
    }
  }

  public validate(key: string): IValidator {
    let validator: IValidator = {};
    if (key==='username') {
      validator = { 
        isValid: this.messageForm.controls.username.valid && 
                 (this.messageForm.controls.username.dirty || this.messageForm.controls.username.touched),
        message: 'Username seems to be ok...'
      }
    }
    if (key==='email') {
      validator = { 
        isValid: this.messageForm.controls.email.valid && 
                 (this.messageForm.controls.email.dirty || this.messageForm.controls.email.touched),
        message: 'Email seems to be ok...'
      }
    }
    if (key==='message') {
      validator = { 
        isValid: this.messageForm.controls.message.valid && 
                 (this.messageForm.controls.message.dirty || this.messageForm.controls.message.touched),
        message: 'Message seems to be ok...'
      }
    }
    return validator;
  }

  public invalidate(key: string): IInvalidator {
    let invalidator: IInvalidator = {};    
    if (key==='username') {
      invalidator = { 
        isInvalid: this.messageForm.controls.username.invalid && 
                 (this.messageForm.controls.username.dirty || this.messageForm.controls.username.touched),
        message: 'Username is required...'
      }
    }
    if (key==='email') {
      invalidator = { 
        isInvalid: this.messageForm.controls.email.invalid && 
                 (this.messageForm.controls.email.dirty || this.messageForm.controls.email.touched),
        message: 'Email is required and the email must contains an @...'
      }
    }
    if (key==='message') {
      invalidator = { 
        isInvalid: this.messageForm.controls.message.invalid && 
                 (this.messageForm.controls.message.dirty || this.messageForm.controls.message.touched),
        message: 'Message is required and must have at least 12 characters...'
      }
    }
    return invalidator;
  }

  onReset() {    
    FORM_KEYS.forEach((value: string) => { 
      localStorage.removeItem(this.localStorageKey(value));
    });  
    this.messageForm.reset();
  }

  public onSubmit(): void {    
    if (this.messageForm.valid) {
      console.log('Something submitted...');
      console.log(this.messageForm.value);
      this.onReset();
    }    
  }

}
