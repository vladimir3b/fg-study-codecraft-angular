import { Component, OnInit } from '@angular/core';

import { IFriend } from '../../data/my-friend.interface';
import { MY_FRIENDS } from '../../data/my-friends.data';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'fg-app-study10',
  templateUrl: './study10.component.html',
  styleUrls: ['./study10.component.scss']
})
export class Study10Component implements OnInit {

  public activateEdit: boolean;
  public showOther: boolean;
  public numberOfFriendsListed: number = 10;
  public myFriends: Array<IFriend> = MY_FRIENDS;
  public startItem: number;
  public endItem:number;
  public editedFriendIndex: number;
  public get editedFriend(): IFriend {
    return this.myFriends[this.editedFriendIndex];
  }
  public set editedFriend(data: IFriend) {
    this.myFriends[this.editedFriendIndex] = data;
  }
 
  constructor() { }

  ngOnInit() {
    this.activateEdit = false;
    this.showOther = false;
    this.startItem = 0;
    this.endItem = this.numberOfFriendsListed;
  }
  
  pageChanged(event: PageChangedEvent): void {
    this.startItem = (event.page - 1) * event.itemsPerPage;
    this.endItem = event.page * event.itemsPerPage;
  }

  public receivedNewFriend($event: IFriend) : void {
    console.log('Data were recived', $event);
  }

  public editFriend(index): void {        
    this.editedFriendIndex = index;
    this.activateEdit = true;
  }

  public hideEdit(): void {
    this.activateEdit = false;
  }
  
  // public showEdit(): void {
  //   this.showEditModal = true;
  // }


}
