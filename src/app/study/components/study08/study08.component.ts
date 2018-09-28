import { Component, OnInit } from '@angular/core';

interface IPlace {
  city: string;
  state: string;
  country: string;
  zipCode: string;
  visited: boolean;
  toString?: () => string;
}

@Component({
  selector: 'fg-app-study08',
  templateUrl: './study08.component.html',
  styleUrls: ['./study08.component.scss']
})
export class Study08Component implements OnInit {

  public myCity: string;
  public myLocation: IPlace;
  public yourLocation: IPlace;

  public successButton = {
    text: 'This is a success button',
    style: 'btn btn-success'
  }
  public dangerButton = {
    text: 'This is a danger button',
    style: 'btn btn-danger'
  }
  public changingButton: any = {};
  public isDisabled: boolean;
  public someHTMLCode: string;
  public color: string = 'red';
  public size: string = '20px';
  public fontStyle: string = 'italic';
  public TwoWayDataBinding1: string;
  public TwoWayDataBinding2: string;

  constructor() { 
    this.isDisabled = true;
    this.changingButton = this.successButton;
    this.myCity = 'Lisbon';
    this.myLocation = {
      city: 'Bucharest',
      state: 'Muntenia',
      country: 'Romania',
      zipCode: 'RO456789',
      visited: true
    }
    setTimeout(() => {
      this.isDisabled = false;
      this.changingButton = this.dangerButton;
      this.yourLocation = {
        city: 'Sibiu',
        state: 'Transilvania',
        country: 'Romania',
        zipCode: 'RO55879',
        visited: true,
        toString: function() {
          // arrow function doesn't work here 
          return `city: ${this.city}, state: ${this.state}, country: ${this.country}`
        }
      }
    }, 3500);
  }

  ngOnInit() {
    setTimeout(() => {
      this.myCity = 'Valencia';
    }, 2000);
    setTimeout(() => {
      this.someHTMLCode = `John Smith is a <strong>big</strong> guy.`;
    }, 4000);
  }

  public showANewMessage(): string {
    //this.myLocation.city = 'Pitesti'; - you cannot change a value while interpolating
    return `I don't like my city, ${this.myLocation.city} and I want to live in ${this.myCity}.`;
  }

  get showANewMessageWithAGetter(): string {
    return `You don't like your city, ${this.yourLocation && this.yourLocation.city} and you want to live in ${this.myCity}.`;
  }

  public onClick(event: any): void {
    console.log('You are big in Japan...', event);
  }

  public x: number = 0;
  public y: number = 0;
  public mouseMove(event: any): void {
    this.x = event.x;
    this.y = event.y;
  }


}
