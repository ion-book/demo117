import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserProvider } from './user';

fdescribe('Service: UserProvider', () => {

  let service: UserProvider;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        { provide: UserProvider, useClass: UserProvider },
      ],
    });
    service = TestBed.get(UserProvider);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Test for getAllUsers', () => {
    it('should return users', () => {
      // Arrange
      const mockResponse = {
        results: [
          {
            "gender": "male",
            "name": {
              "title": "mr",
              "first": "samuel",
              "last": "ross"
            },
            "email": "samuel.ross@example.com",
          }
        ]
      };
      let dataError, dataResponse;
      // Act
      service.getAllUsers()
      .subscribe((response) => {
        dataResponse = response['results'];
      }, (error) => {
        dataError = error;
      });
      const req = httpMock.expectOne(`https://randomuser.me/api/?results=25`);
      req.flush(mockResponse);
      // Assert
      expect(dataResponse.length).toEqual(1);
      expect(req.request.url).toEqual(`https://randomuser.me/api/?results=25`);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });

    it('should return an error', () => {
      // Arrange
      let dataError, dataResponse: any[];
      // Act
      service.getAllUsers()
      .subscribe((response) => {
        dataResponse = response['results'];
      }, (error) => {
        dataError = error;
      });
      httpMock.expectOne('https://randomuser.me/api/?results=25')
      .error(new ErrorEvent('error'));
      // Assert
      expect(dataResponse).toBeUndefined();
      expect(dataError).toBeDefined();
    });
  });

});