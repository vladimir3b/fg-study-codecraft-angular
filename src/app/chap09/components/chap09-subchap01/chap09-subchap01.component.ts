import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-app-chap09-subchap01',
  templateUrl: './chap09-subchap01.component.html',
  styleUrls: ['./chap09-subchap01.component.scss']
})
export class Chap09Subchap01Component implements OnInit {

  public languages: Array<string> = [];

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
  }

}
