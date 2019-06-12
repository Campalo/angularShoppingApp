import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // define a GLOBAL property to store the current products as an array in the cart
  items = [];

  addToCart(product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
