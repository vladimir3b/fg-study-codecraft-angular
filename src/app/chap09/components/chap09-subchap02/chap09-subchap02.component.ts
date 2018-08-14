import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

interface IValidator {
  isValid: boolean,
  message: string
}

interface IInvalidator {
  isInvalid: boolean,
  message: string
}

@Component({
  selector: 'fg-app-chap09-subchap02',
  templateUrl: './chap09-subchap02.component.html',
  styleUrls: ['./chap09-subchap02.component.scss']
})
export class Chap09Subchap02Component implements OnInit {

  public showDebug = false;
  public languages: Array<string> = [];
  public myForm: FormGroup;

  constructor() { }

  ngOnInit() {
    [  
      'English',
      'German',
      'French',
      'Spanish',
      'Portuguese',
      'Romanian'
    ].forEach((language: string) => {
      this.languages.unshift(language);
    });
    this.myForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('',  Validators.required)
      }),
      account: new FormGroup({
        email: new FormControl('', [
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8)
        ])
      }),    
      language: new FormControl()
    });
  }

  public validate(key: string): IValidator {

    let validator: IValidator = {
      isValid: false,
      message: ''
    };

    switch (key) {

      case 'firstName': 
        validator.isValid = 
          (<any>this.myForm.controls.name).controls.firstName.valid  && 
          ((<any>this.myForm.controls.name).controls.firstName.dirty ||
          (<any>this.myForm.controls.name).controls.firstName.touched);   
        validator.message = 'The first name seems to be correct.';
        break; 

      case 'lastName': 
        validator.isValid = 
          (<any>this.myForm.controls.name).controls.lastName.valid  && 
          ((<any>this.myForm.controls.name).controls.lastName.dirty ||
          (<any>this.myForm.controls.name).controls.lastName.touched);   
        validator.message = 'The last name seems to be correct.';
        break; 

      case 'email': 
        validator.isValid = 
          (<any>this.myForm.controls.account).controls.email.valid  && 
          ((<any>this.myForm.controls.account).controls.email.dirty ||
          (<any>this.myForm.controls.account).controls.email.touched);   
        validator.message = 'The email seems to be correct.';
        break;     
      
      case 'password': 
        validator.isValid = 
          (<any>this.myForm.controls.account).controls.password.valid  && 
          ((<any>this.myForm.controls.account).controls.password.dirty ||
          (<any>this.myForm.controls.account).controls.password.touched);   
        validator.message = 'The password seems to be correct.';
        break;  
    }

    return validator;
  }

  public invalidate(key: string): IInvalidator {

    let invalidator: IInvalidator = {
      isInvalid: true,
      message: ''
    };

    switch (key) {

      case 'firstName': 
        invalidator.isInvalid =
          (<any>this.myForm.controls.name).controls.firstName.invalid  && 
          ((<any>this.myForm.controls.name).controls.firstName.dirty ||
          (<any>this.myForm.controls.name).controls.firstName.touched);      
          invalidator.message = 'The first name is required';
        break;

      case 'lastName': 
        invalidator.isInvalid =
          (<any>this.myForm.controls.name).controls.lastName.invalid  && 
          ((<any>this.myForm.controls.name).controls.lastName.dirty ||
          (<any>this.myForm.controls.name).controls.lastName.touched);      
          invalidator.message = 'The last name is required';
        break;

      case 'email': 
        invalidator.isInvalid =
          (<any>this.myForm.controls.account).controls.email.invalid  && 
          ((<any>this.myForm.controls.account).controls.email.dirty ||
          (<any>this.myForm.controls.account).controls.email.touched);      
          if ((<any>this.myForm.controls.account).controls.email.errors) {
            invalidator.message = 
              (<any>this.myForm.controls.account).controls.email.errors.required ? 
              'The email is required' : 'The email must contain at least a @ character.';
          } else {
            invalidator.message ='';
          }         
        break;
      
      case 'password':
        invalidator.isInvalid = 
          (<any>this.myForm.controls.account).controls.password.invalid  && 
          ((<any>this.myForm.controls.account).controls.password.dirty ||
          (<any>this.myForm.controls.account).controls.password.touched);      
          if ((<any>this.myForm.controls.account).controls.password.errors) {
            invalidator.message = 
              (<any>this.myForm.controls.account).controls.password.errors.required ? 
              'The password is required' : 'The password must contain at least 8 characters.';
          } else {
            invalidator.message ='';
          }         
        break;
    } 
    return invalidator;
  }

}
