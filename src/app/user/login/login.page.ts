import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import {BasePagePage} from '../../base/base-page/base-page.page';
import {Router} from '@angular/router';
import {RegisterPage} from '../register/register.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends BasePagePage implements OnInit {


  userName: string = null;
  password: string = null;
  // 这里以上是做 变量的

  constructor(private toastCtrl: ToastController, private router: Router) {
    super(toastCtrl);
  }

  ngOnInit() {
    console.log('2332');
  }

  loginApp() {
    if (this.userName === null) {
      this.showToast('用户名不能为空');
      return;
    }

    if (this.password.length < 6) {
      this.showToast('请输入大于6位以上的密码');
      return;
    }

    if (this.password === null) {
      this.showToast('密码不能为空');
      return;
    }
    console.log(`用户登录 账户 : ${this.userName} \n 密码: ${this.password}`);
  }

  gotoRegister() {
    console.log(`去注册界面`);
    this.router.navigate(['./login/register']);
  }

  gotoForgetPassView() {
    console.log(`请忘记密码界面`);
    this.router.navigate(['./login/forgetpassword']);
  }
}
