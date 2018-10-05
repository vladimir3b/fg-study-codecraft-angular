import { 
  Component, 
  OnInit, 
  Input, 
  ViewChild, 
  ElementRef, 
  AfterViewInit,
  ChangeDetectorRef,
  Output,EventEmitter
} from '@angular/core';
import { FgModalComponent } from '../../../_others/components/fg-modal/fg-modal.component';



@Component({
  selector: 'fg-app-modal-to-tab',
  templateUrl: './modal-to-tab.component.html',
  styleUrls: ['./modal-to-tab.component.scss']
})
export class ModalToTabComponent implements OnInit, AfterViewInit {

  @Input() public controller: string;
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  @ViewChild(FgModalComponent) modal: FgModalComponent;

  constructor(private _cdRef:ChangeDetectorRef) { }

  ngOnInit() {
    // console.log(this.modal);
  }

  ngAfterViewInit() {  
    this.modal.show(); 
    this._cdRef.detectChanges();
  }

  showUs() {
    this.close.emit(true);
  }

}
