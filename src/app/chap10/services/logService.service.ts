export class LogService {
  public log(message: string, error: boolean = false): void {
    if (error) {
      console.error(message);
    } else {
      console.log(message);
    } 
  }
}
