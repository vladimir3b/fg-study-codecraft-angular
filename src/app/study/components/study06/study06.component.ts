import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fg-app-study06',
  templateUrl: './study06.component.html',
  styleUrls: ['./study06.component.scss']
})
export class Study06Component implements OnInit {

  public HTMLCode: string =` 
  <div class="alert alert-info">
    <h6>This is a little test...</h6>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Ipsa numquam veniam porro? Blanditiis consectetur magnam
      illum optio sint fugiat vitae ut inventore esse eaque.
    </p>
  </div>`;

  public editor: string = `
  <ngx-monaco-editor
    [options]="editorOptions" 
    [(ngModel)]="HTMLCode">
  </ngx-monaco-editor>
  `;

  public editorOptions = {
    theme: 'vs-light',
    language: 'text/html'
  };

  constructor() { }

  ngOnInit() {
  }

  

}
