import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {products} from '../products';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  // add the current product to the cart
  addToCart(product){
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
  constructor(
    // to use the different services
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  // define the route based on the param (here productId)
  // listen on the change with subscribe
  // update the product info to display the right one
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
     });
  }

}