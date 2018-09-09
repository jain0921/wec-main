import { DataService } from './data-service';

export class LogService extends DataService {

  private methodName: string;

  constructor() {
    super('');
  }

  debug(): void {}

  info(): void {}

  warn(): void {}

  error(): void {}

}
