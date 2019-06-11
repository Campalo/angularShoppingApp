import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //define LOCAL itemList property 
  itemList;
  // define the checkoutForm property to store the form model
  checkoutForm;

  constructor(
    // use the service to be able to display the items inside the cart
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    // set the checkoutForm property with a form model
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    // assign a new value to itemList by returning a copy if the Items array
    this.itemList = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // process checkout data from the form 
    console.warn('Your order has been submitted', customerData);
    //clear the cart
    this.itemList = this.cartService.clearCart();
    //reset the form
    this.checkoutForm.reset();
  }

}