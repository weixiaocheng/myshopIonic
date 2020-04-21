import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserInfoService} from '../serve/user-info.service';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
      private  http: HttpClient,
      private userInfo: UserInfoService,
      private router: Router
  ) {
  }

  base_url = "http://tp5.summer.com/api/";

//  搭建请求头部
  httpHeader() {
    const headerParams = new HttpHeaders({
      'deivce': 'ios',
      'version': '1.0.0',
      'Content-Type' : 'application/json; charset=utf-8'
    });
    const token = this.userInfo.getToken();
    if (token != undefined && token.length > 0) {
      headerParams.set('token' , token);
    }
    return headerParams;
  }

//  发送get 请求
  HttpRequset_GET(url: string , params?: {}) {
    if (url.startsWith('/')) {
      url = url.substr(1, url.length - 1);
    }
    let http_url = this.base_url + url;

    let observeAble = new Observable((observe) => {
      this.http.get(http_url, {
        headers: this.httpHeader(),
        params: params
      }).subscribe(data => {
        console.log('***** 请求成功 *****');
        this.checkBackData(data, observe);
      }, e => {
        console.log(e);
        observe.error(e);
      }, ()=>{
        console.log("*****  请求结束 ******");
        observe.complete();
      });
    });
    return  observeAble;
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
        headers: this.httpHeader(),
      }).subscribe(data => {
        console.log('请求成功');
        this.checkBackData(data, observe);
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
    // 处理一下登录失败 或者session过期的问题
    if (data['code'] == 401 || data['code'] == 202) {
      this.userInfo.clearUserInfo();
      // 刷新路由 去登录界面  现在还没做登录界面  弹出提示 去登录界面
      confirm('登录过期');
      return;
    }
  }
}
