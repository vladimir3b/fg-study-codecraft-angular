import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-app-study04',
  templateUrl: './study04.component.html',
  styleUrls: ['./study04.component.scss']
})
export class Study04Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  editorOptions = {theme: 'vs-dark', language: 'html'};
  code: string= 'function x() {\nconsole.log("Hello world!");\n}'

}
