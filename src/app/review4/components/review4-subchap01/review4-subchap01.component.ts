import { Component, OnInit, Inject } from '@angular/core';
import { Review4ParentService } from '../../services/review4-parent.service';
import { REVIEW4_PARENT_SERVICE_TOKEN } from '../../../_others/tokens';


@Component({
  selector: 'fg-app-review4-subchap01',
  templateUrl: './review4-subchap01.component.html',
  styleUrls: ['./review4-subchap01.component.scss'],
  providers: [Review4ParentService]
})
export class Review4Subchap01Component implements OnInit {

  constructor(
    @Inject(REVIEW4_PARENT_SERVICE_TOKEN) private _review4ParentGeneralService: Review4ParentService,
    @Inject('criminal') private _person: any,
    private _review4ParentLocalService: Review4ParentService) { }
    //use inject decorator to inject by token

  ngOnInit() {
    this._review4ParentLocalService.serviceValue = `Right now ${this._person.firstName} ${this._person.lastName} is a ${this._person.title}.`;
  }
  public getValueFromGeneralService():string {
    return this._review4ParentGeneralService.serviceValue;
  }
  public getValueFromLocalService(): string {
    return this._review4ParentLocalService.serviceValue;
  }
}
