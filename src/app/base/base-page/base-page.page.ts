import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.page.html',
  styleUrls: ['./base-page.page.scss'],
})
export class BasePagePage implements OnInit {

  constructor(public toast: ToastController) { }

  private _toastCtrl;

  ngOnInit() {
  }

  // 获取toast 的单例
  async getToastCtrl(mesg, dura, positi: 'top' | 'bottom' | 'middle' = 'bottom') {
    if (this._toastCtrl != null) {
      if (this._toastCtrl.message === mesg ){
        return ;
      }
      this._toastCtrl.dismiss();
      this._toastCtrl = null;
    }
    this._toastCtrl = await this.toast.create({
      message: mesg,
      duration: dura,
      position: positi
    })
    this._toastCtrl.present();
  }

  async showToast(mesg: string, dura = 2000, positi:'top' | 'bottom' | 'middle' = 'bottom') {
       this.getToastCtrl(mesg, dura, positi);
  }
}
