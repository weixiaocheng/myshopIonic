import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // 商品列表
  productList ;
  constructor(private httpserve: HttpService) { }

  ngOnInit() {
    this.httpserve.HttpRequset_GET('ProductController/getProductList', {'page_size': 10, 'page_index' : 1}).
    subscribe(data => {
        this.productList = data;
        },
            e => {
      console.log(e);
            } ,
        ()=>{
      console.log('请求结束了');
    })
  }

}
