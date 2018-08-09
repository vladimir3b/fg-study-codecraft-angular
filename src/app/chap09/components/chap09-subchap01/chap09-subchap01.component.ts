import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-app-chap09-subchap01',
  templateUrl: './chap09-subchap01.component.html',
  styleUrls: ['./chap09-subchap01.component.scss']
})
export class Chap09Subchap01Component implements OnInit {

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
        firstName: new FormControl(),
        lastName: new FormControl()
      }),
      account: new FormGroup({
        email: new FormControl(),
        password: new FormControl()
      }),    
      language: new FormControl()
    });
  }

}
