import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userName: string;
  password: string;
  // 这里以上是做 变量的

  constructor() { }

  ngOnInit() {
  }


}
