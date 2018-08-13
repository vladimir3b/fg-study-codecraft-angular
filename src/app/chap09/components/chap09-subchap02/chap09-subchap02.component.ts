import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-app-chap09-subchap02',
  templateUrl: './chap09-subchap02.component.html',
  styleUrls: ['./chap09-subchap02.component.scss']
})
export class Chap09Subchap02Component implements OnInit {

  public showDebug = true;
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


}
