import { 
  Component, 
  OnInit, 
  Output, 
  EventEmitter, 
  ViewChild, 
  ElementRef 
} from '@angular/core';

import { IPerson, gender } from '../data.structures';

@Component({
  selector: 'fg-app-chap04-new-person',
  templateUrl: './chap04-new-person.component.html',
  styleUrls: ['./chap04-new-person.component.scss']
})
export class Chap04NewPersonComponent implements OnInit {

  public sex: gender = 'male';
  public age: number | '';
  public firstName: string;
  @ViewChild('lastNameInput') private _lastName: ElementRef;

  @Output() public newPersonCreated: EventEmitter<IPerson> =
  new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onGenderChange(gender: gender) {
    this.sex = gender;
  }

  public lastName(): any {
    return this._lastName.nativeElement.value;
  }

  public resetForm(): void {
    this.firstName='';
    (<any>this).lastNameView='';
    this.sex = "male";
    this.age = '';
  }

  public addNewPerson(): void {
    if (this.verifyData()) {
      this.newPersonCreated.emit({
        firstName: this.firstName,
        lastName: this.lastName(),
        sex: this.sex,
        age: <number>this.age
      });
      this.resetForm();
    }
  }

  public verifyAge(): boolean {
    if (this.age === '') {
      return false;
    } else {      
      return (this.age >= 0) &&  (this.age <= 125);
    }
  }

  public verifyData(): boolean {
    return !(!this.firstName) && 
      !(!this.lastName()) && 
      this.verifyAge();     
  }

}
