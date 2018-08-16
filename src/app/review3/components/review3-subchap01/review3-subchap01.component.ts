import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'fg-app-review3-subchap01',
  templateUrl: './review3-subchap01.component.html',
  styleUrls: ['./review3-subchap01.component.scss']
})
export class Review3Subchap01Component implements OnInit {

  public messageForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.messageForm = new FormGroup({});
  }

  public onSubmit(): void {
    console.log('Something submitted...');
    if (this.messageForm.valid) {
      console.log(this.messageForm.value);
    }    
  }

}
