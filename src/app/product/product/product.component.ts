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
    this.imagePath = this.productData['image_path'];
    this.productName = this.productData['productName'];
    this.price = this.productData['price'];
    this.stock = this.productData['stock'];
  }

  ngOnInit() {}

}
