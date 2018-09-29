import { 
  Component, 
  OnInit, 
  Input, 
  Output,
  EventEmitter
} from '@angular/core';
import { IFullName } from '../study09/study09.component';

@Component({
  selector: 'fg-app-full-name-input',
  templateUrl: './full-name-input.component.html',
  styleUrls: ['./full-name-input.component.scss']
})
export class FullNameInputComponent implements OnInit {

  @Input() public name: IFullName;
  @Output() public nameChange: EventEmitter<IFullName> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onNameChange(type: string, value: string): void {
    this.name[type] = value;
    this.nameChange.emit(this.name);
  }

}
