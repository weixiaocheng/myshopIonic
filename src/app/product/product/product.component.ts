import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() productData: {[key: string] : string}

  // 主图
  public imagePath: string;
  // 商品名称
  public productName: string;
  // 商品价格
  public price : string;
  // 商品库存
  public stock : string;

  constructor() {

  }

  ngOnInit() {
    console.log('初始化 组件');
    if (this.productData != undefined){
      console.log(this.productData);
      this.imagePath = this.productData['main_img_url'];
      this.productName = this.productData['product_name'];
      this.price = this.productData['price'];
      this.stock = this.productData['stock'];
    }else {
      console.log("数据没有传入进来");
    }
  }
}

