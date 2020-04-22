import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http/http.service';
import {BasePagePage} from '../../base/base-page/base-page.page';
import {LoadingController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {UserInfoService} from '../../serve/user-info.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage extends BasePagePage implements OnInit {

  public phoneNumber : string = "15361842017";
  public password: string = "123456";
  public validateCode: string = "";
  public userName: string = "summer";

  constructor(private toastCtrl: ToastController,
              private loadingCtr: LoadingController,
              private router: Router ,
              private userInfo : UserInfoService,
              private  httpserve: HttpService
  ) {
    super(toastCtrl, loadingCtr);
  }

  ngOnInit() {
  }

  // 注册app
  registerApp() {
    this.httpserve.HttpRequset_POST('Login/registerApp', {
      "password" : this.password,
      "phone" : this.phoneNumber,
      "user_name" : this.userName,
      "code" : this.validateCode
    }).subscribe(data => {
      this.showToast('注册成功');
    }, e => {
      this.showToast(e.toLocaleString());
    });

  }

  // 发送验证码
  senderCode() {
    if (this.phoneNumber == undefined) {
      this.showToast('请输入手机号');
      return;
    }else if (this.checkPhoneNumber(this.phoneNumber) == false) {
      return;
    }
    this.showLoading('发送验证码');
    this.httpserve.HttpRequset_POST('/Login/sendCode', {'phone' : this.phoneNumber, 'type': "1"} ).subscribe(data => {
      console.log(data);
      this.showToast('发送成功');
    },e => {
      this.showToast(e);
    }, () => {
      this.dismissLoading();
    });
  }
}
