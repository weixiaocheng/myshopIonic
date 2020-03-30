import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observable, Observable} from 'rxjs';
import {UserInfoService} from '../serve/user-info.service';
import {Subscriber} from 'rxjs/src/internal/Subscriber';
import {Subscribable, TeardownLogic} from 'rxjs/src/internal/types';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private  http: HttpClient, private userInfo: UserInfoService) {
  }

  base_url = "http://tp5.summer.com/api/";

//  搭建请求头部
  httpHeader = new HttpHeaders({
    'deivce' : "ios",
    'version' : '1.0.0'
    //'token' : this.userInfo.getToken() == undefined? this.userInfo.getToken() : null
  });

//  发送get 请求
  HttpRequset_GET(url: string , params?: {}) {
    if (url.startsWith('/')) {
      url = url.substr(1, url.length - 1);
    }
    let http_url = this.base_url + url;
    return  this.http.get(http_url,{
      headers: this.httpHeader,
      params: params
    });
  }

  // 发送post 请求
  HttpRequset_POST(url: string, params?:{}) {
    if (url.startsWith('/')) {
      url = url.substr(1, url.length - 1);
    }
    let http_url = this.base_url + url;
    let observeAble  = new Observable((observe)=> {
      let body = JSON.stringify(params);
      this.http.post(http_url,body,{
        headers: this.httpHeader
      }).subscribe(data => {
        console.log('请求成功');
      }, e => {
        console.log(e);
        observe.error(e);
      }, ()=>{
        observe.complete();
      });
      }
    );

    return observeAble;
  }

  // 处理数据的方法
  checkBackData(data,observe){
    if (data['isSuccess'] == false) {
      observe.error(data['message']);
    }else {
      observe.next(data['data']);
      return;
    }

    //
  }
}
