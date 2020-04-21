import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent implements OnInit {

  @Input() placeHolder;
  @Input() passValue;
  @Input() passTitle;
  @Input() passType;

  // 类型转换一下
  _placeholder: string;
  _passtitle: string;
  _passType: string;

  constructor() { }

  ngOnInit() {
    this._placeholder = this.placeHolder;
    this._passtitle = this.passTitle;
    this._passType = this.passType;
  }

}
