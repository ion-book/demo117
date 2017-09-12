import { TestBed, inject } from '@angular/core/testing';
import { LoggerProvider } from './logger';

describe('Service: LoggerService', () => {

  //Arrange
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: LoggerProvider, useClass: LoggerProvider },
      ]
    })
  });

  it('should be created', inject([LoggerProvider], (service: LoggerProvider) => {
    expect(service).toBeTruthy();
  }));

  describe("Test for logError", ()=>{
    
    it('should return "ERROR: error message"', inject([LoggerProvider], (service: LoggerProvider) => {
      
      service.logError(new Error("error error"), "error message");
      expect(service.logs[0]).toEqual("ERROR: error message");
    }));

  });

  describe("Test for logWarning", ()=>{
    
    it('should return "WARNING: warning message"', inject([LoggerProvider], (service: LoggerProvider) => {
      
      service.logWarning(new Error("warning error"), "warning message");
      expect(service.logs[0]).toEqual("WARNING: warning message");
    }));
  
  });

  describe("Test for log register", ()=>{
    
    it('should register three logs', inject([LoggerProvider], (service: LoggerProvider) => {

      service.logError(new Error("error error"), "error message");
      service.logWarning(new Error("warning error"), 'warning message');
      service.logError(new Error("error error"), "error message");
      service.logWarning(new Error("warning error"), 'warning message');
      expect(service.logs[0]).toEqual("ERROR: error message");
      expect(service.logs[1]).toEqual("WARNING: warning message");
      expect(service.logs[2]).toEqual("ERROR: error message");
      expect(service.logs[3]).toEqual("WARNING: warning message");
    }));

  });
    

});