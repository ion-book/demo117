import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {}

  getAllUsers() {
    return this.http.get('https://randomuser.me/api/?results=25');
  }

}
