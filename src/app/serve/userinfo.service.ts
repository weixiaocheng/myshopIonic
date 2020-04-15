import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {

  constructor() { }

  setInfo(data) {

  }

  getInfo() {

  }

  gettoken(): string {
    return window.localStorage.getItem('token');
  }
}
