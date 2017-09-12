import { Injectable } from '@angular/core';

@Injectable()
export class LoggerProvider {

  logs: string[] = [];

  constructor() {
    console.log('Hello LoggerProvider Provider');
  }

  logError(error: Error, msg: string): void{
    let logMsg = {
      level: 'error',
      extra:{
        title: `ERROR: ${msg}`
      }
    };
    console.error(logMsg.extra.title, error);
    this.log(error, logMsg);
  }

  logWarning(error: Error, msg: string): void{
    let logMsg = {
      level: 'warning',
      extra:{
        title: `WARNING: ${msg}`
      }
    };
    console.warn(logMsg.extra.title, error);
    this.log(error, logMsg);
  }

  private log(error: Error, logMsg): void{
    this.logs.push(logMsg.extra.title);
    //send error to SENTRY;
  }

}
