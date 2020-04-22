import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private storage: Storage;
  constructor( ) {
    this.storage = window.localStorage;
  }

  setUserInfo(data) {
    this.storage.setItem('phone' , data['phone']);
    this.storage.setItem('userName', data['user_name']);
    this.storage.setItem('token', data['token']);
  }

  getUserName() {
    return  this.storage.getItem('userName');
  }

  getToken():string {
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
