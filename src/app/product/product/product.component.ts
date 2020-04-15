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


/*
create_time: "2020-03-16 21:30:46"

des: "这是商品详情 <br> 混合了html 片段在里面"

imgs: "tp5.summer.com/storage/topic/20200316/150725fcc67bd22e6effd292dee9cf22.jpeg"

is_home: 0

is_valishop: 0

main_img_url: "http://tp5.summer.com/storage/topic/20200316/150725fcc67bd22e6effd292dee9cf22.jpeg"

max_count: 1

price: 100

product_id: 6

product_name: "iphonex"

sale: 0

status: 1

stock: 100

update_time: "2020-03-16 21:30:46"
*/
