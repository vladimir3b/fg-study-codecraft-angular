import { 
  Component,    
  Output, 
  EventEmitter, 
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'fg-app-chap04-list-one-person',
  templateUrl: './chap04-list-one-person.component.html',
  styleUrls: ['./chap04-list-one-person.component.scss']
})
export class Chap04ListOnePersonComponent implements OnDestroy {

  @Output('onDeleteOnePerson') public deletePerson: EventEmitter<boolean> = 
    new EventEmitter();
  constructor() { }

  ngOnDestroy() {
    console.log('In the ngOnDestroy');
    console.log('They destroyed a Chap04ListOnePersonComponent component');
    console.log('----------------------------------------');
  }

  deleteThis() {
    this.deletePerson.emit(true);    
  }

}
