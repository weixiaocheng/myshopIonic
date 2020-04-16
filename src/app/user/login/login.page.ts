import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userName: string = null;
  password: string = null;
  // 这里以上是做 变量的

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async presentToast(showMasg: string, showDura = 2000) {
    const toast = await this.toastCtrl.create({
      message: showMasg,
      duration: showDura
    });
    toast.present();
  }

  loginApp() {
    if (this.userName === null) {
      this.presentToast('用户名不能为空');
      return;
    }
    if (this.password === null) {
      this.presentToast('密码不能为空');
      return;
    }
    console.log(`用户登录 账户 : ${this.userName} \n 密码: ${this.password}` );
  }

  gotoRegister() {
    console.log(`去登录界面`);
  }

  gotoForgetPassView() {
    console.log(`请忘记密码界面`);
  }
}
