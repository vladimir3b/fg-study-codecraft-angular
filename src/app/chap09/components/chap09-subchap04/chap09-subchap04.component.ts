import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'fg-app-chap09-subchap04',
  templateUrl: './chap09-subchap04.component.html',
  styleUrls: ['./chap09-subchap04.component.scss']
})
export class Chap09Subchap04Component implements OnInit {

  public searches: Array<string> = [];
  public searchField: FormControl;

  constructor() { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .pipe(
        debounceTime(800), 
        distinctUntilChanged()
      )
      .subscribe((term: string): void => {
      this.searches.push(term);
    });
  }

}
