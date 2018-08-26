import { Inject } from "@angular/core";
import { LogService } from "./logService.service";

export class MyService {

  public text: string;
  public error: boolean = true;

  constructor(
    @Inject(LogService) private _logService: LogService,
    @Inject('criminal') private _message: any
  ) { }

  public log() {
    this._logService.log(this.text, this.error);
  }

  public showMessage() {
    this._logService.log(`${this._message.firstName} ${this._message.lastName} is a ${this._message.title}.`, this.error);
  }

}
