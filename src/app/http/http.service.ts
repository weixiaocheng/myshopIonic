import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private  http: HttpClient) {
  }

  base_url = "http://tp5.summer.com/api/";

//  搭建请求头部
  httpHeader = new HttpHeaders({
    'deivce' : "ios",
    'version' : '1.0.0'
  });

//  发送get 请求
  HttpRequset_GET(url: string , params?: {}) {
    let http_url = this.base_url + url;
    return  this.http.get(http_url,{
      headers: this.httpHeader,
      params: params
    });
  }
}
