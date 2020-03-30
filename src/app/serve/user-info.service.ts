import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(private storage: Storage ) {
    this.storage = window.localStorage;
  }

  setUserInfo(data) {
    this.storage.setItem('phone' , data['phone']);
    this.storage.setItem('userName', data['userName']);
    this.storage.setItem('token', data['token']);
  }

  getUserName() {
    return  this.storage.getItem('userName');
  }

  getToken() {
    return this.storage.getItem('token');
  }

  // 清理用户信息
  clearUserInfo() {
    this.storage.removeItem('token');
    this.storage.removeItem('phone');
    this.storage.removeItem('userName');
  }

  getUserInfo() {
    let userinfo: {[key: string] : string} = {
      'userName' : this.storage.getItem('userName'),
      'phone' : this.storage.getItem('phone'),
      'token' : this.storage.getItem('token')
    }
    return userinfo;
  }

}
