import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-app-study05',
  templateUrl: './study05.component.html',
  styleUrls: ['./study05.component.scss']
})
export class Study05Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  editorOptions = {
    theme: 'vs-light',
    language: 'html'
  };
  code = `function hello() {
	 alert('Hello world!');
  }`;

}
