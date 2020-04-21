import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public phoneNumber : string;
  public password: string;
  public validateCode: string;

  constructor(private httpserve: HttpService) { }

  ngOnInit() {
  }

  // 注册app
  registerApp() {

  }

  // 发送验证码
  senderCode() {

  }
}
