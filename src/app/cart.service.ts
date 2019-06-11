import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // define a GLOBAL property to store the current products as an array in the cart
  items=[];

  addToCart(product){
    this.items.push(product);
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items=[];
    return this.items;
  }
  //use the HttpClient to retrieve the shipping data
  getShippingPrices(){
    return this.http.get('/assets/shipping.json')
  }
  constructor(
    //inject HttpClient to enable its use inside the CartService class
    private http: HttpClient
  ) { }

}