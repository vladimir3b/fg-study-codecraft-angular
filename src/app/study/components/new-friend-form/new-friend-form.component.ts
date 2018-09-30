import { 
  Component, 
  OnInit, 
  ViewChild,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { IFriend, IFullName } from '../../data/my-friend.interface';
import { Friend } from '../../data/my-friend.class';


@Component({
  selector: 'fg-app-new-friend-form',
  templateUrl: './new-friend-form.component.html',
  styleUrls: ['./new-friend-form.component.scss']
})
export class NewFriendFormComponent implements OnInit{

  @Input('myFriend') public myFriendInput: IFriend;   
  @Input() public addressMinLength: number;
  @Input() public nameMinLength: number;  
  @ViewChild('myFriendForm') myForm: any;
  @Output() myFriendChange: EventEmitter<IFriend> = new EventEmitter();
  public submitted: boolean = false;  
  public myFriend: IFriend;  

  constructor() {   
    this.myFriend = new Friend();  
  }

  ngOnInit() {
    this.addressMinLength = this.addressMinLength || 10;
    this.nameMinLength = this.nameMinLength || 3; 
    if (this.myFriendInput) {
      this.myFriend.name.firstName = this.myFriendInput.name.firstName;
      this.myFriend.name.lastName = this.myFriendInput.name.lastName;
      this.myFriend.name.middleName = this.myFriendInput.name.middleName;
      this.myFriend.age = this.myFriendInput.age;
      this.myFriend.address = this.myFriendInput.address;
      this.myFriend.gender = this.myFriendInput.gender
    } 
  }

  private _resetTheForm(): void {
    this.submitted = false;
    this.myForm.reset();
  }

  public onSubmit(): void {
    if (this.myForm.valid) {
      this.myFriendChange.emit({
        name: {
          firstName: this.myFriend.name.firstName,
          middleName: this.myFriend.name.middleName,
          lastName: this.myFriend.name.lastName
        },
        age: this.myFriend.age,
        gender: this.myFriend.gender,
        address: this.myFriend.address
      });
      this._resetTheForm;
    } else {
      this.submitted = true;
    }
  }

}
