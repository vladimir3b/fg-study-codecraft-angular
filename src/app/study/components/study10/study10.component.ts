import { Component, OnInit } from '@angular/core';

import { IFriend } from '../../data/my-friend.interface';
import { MY_FRIENDS } from '../../data/my-friends.data';

@Component({
  selector: 'fg-app-study10',
  templateUrl: './study10.component.html',
  styleUrls: ['./study10.component.scss']
})
export class Study10Component implements OnInit {

  public myFriends: Array<IFriend> = MY_FRIENDS

  public amigo: IFriend = {
    name: {
      firstName: 'John',
      middleName: 'David',
      lastName: 'Smith'
    },
    gender: 'male',
    age: 45,
    address: 'street His Street, number 45'
  }

  constructor() { }

  ngOnInit() {
  }
  
  public receivedNewFriend($event: IFriend) : void {
    console.log('Data were recived', $event);
  }

}
