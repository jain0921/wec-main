export class DataService {

  private _showBusy = false;
  private _hostURL: string;

  public constructor(hostURL) {
    this._hostURL = hostURL;
  }

  protected post() {}

}
