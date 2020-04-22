import { Component, OnInit } from '@angular/core';
import {LoadingController, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.page.html',
  styleUrls: ['./base-page.page.scss'],
})
export class BasePagePage implements OnInit {

  constructor(public toast: ToastController, public loadCtrl: LoadingController) { }

  private _toastCtrl;
  private _loadingCtrl;

  ngOnInit() {
  }

  // 获取toast 的单例
  private async getToastCtrl(mesg, dura, positi: 'top' | 'bottom' | 'middle' = 'bottom') {
    if (this._toastCtrl != null && this.toast != undefined) {

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
    if (this._loadingCtrl != null || this._loadingCtrl != undefined) {
      this.dismissLoading();
    }
       this.getToastCtrl(mesg, dura, positi);
  }

  async showLoading(mesg: string, dura = 10000) {
    this._loadingCtrl = await this.loadCtrl.create({
      message: mesg,
      duration: dura,
      backdropDismiss: false
    });
    this._loadingCtrl.present();
  }

  async dismissLoading() {
    if (this._loadingCtrl != null || this._loadingCtrl != undefined) {
      this._loadingCtrl.dismiss();
      this._loadingCtrl = null;
    }
  }
}
